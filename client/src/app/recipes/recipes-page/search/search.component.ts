import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDestroyService, tuiPure } from '@taiga-ui/cdk';
import { BehaviorSubject, EMPTY, forkJoin, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    filter,
    switchMap,
    takeUntil,
} from 'rxjs/operators';

import { RecipesApiService } from '@app/shared/services';
import { DEFAULT_COOKING_TIME } from '@app/consts';
import { Recipe, SimpleInterface } from '@app/interfaces';

import {
    contructCategory,
    contructCookingTime,
    contructCountry,
    contructIngredients,
    contructNameRecipe,
} from './helpers/query-contrustor-funcs';
import { isNotPresentOrEmptyString } from '@app/helpers';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class SearchComponent {
    @Input() form!: FormGroup;

    @Output() searchedRecipes: EventEmitter<Observable<readonly Recipe[]>> =
        new EventEmitter<Observable<readonly Recipe[]>>();

    readonly searchForm = new FormGroup({
        name: new FormControl(null),
        category: new FormControl(null),
        kitchen: new FormControl(null),
        preparationTime: new FormControl(null),
        excludeIngredients: new FormControl([]),
        includeIngredients: new FormControl([]),
    });

    readonly defaultSearchValues$ = forkJoin({
        categories: this.recipesService.getCategories(),
        countries: this.recipesService.getCountries(),
        time: of(DEFAULT_COOKING_TIME),
        ingredients: this.recipesService.getIngredients(),
    });

    open = false;

    includeIngredientsChanged!: readonly SimpleInterface[];

    excludeIngredientsChanged!: readonly SimpleInterface[];

    readonly recipes$$: BehaviorSubject<readonly Recipe[]> =
        new BehaviorSubject<readonly Recipe[]>([]);

    readonly search$: BehaviorSubject<string> = new BehaviorSubject('');

    isOpenedFilters = false;

    constructor(
        private readonly recipesService: RecipesApiService,
        private readonly destroy$: TuiDestroyService,
    ) {
        this.searchForm.controls.includeIngredients.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((value) => (this.includeIngredientsChanged = value));
        this.searchForm.controls.excludeIngredients.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((value) => (this.excludeIngredientsChanged = value));

        this.search$
            .pipe(
                debounceTime(1000),
                distinctUntilChanged(),
                filter(
                    (value) =>
                        !isNotPresentOrEmptyString(value) && value.length >= 3,
                ),
                switchMap((value: string) => {
                    const query = contructNameRecipe(value) || '';
                    return this.recipesService.searchRecipe(query).pipe(
                        catchError((_) => {
                            return EMPTY;
                        }),
                    );
                }),
                takeUntil(this.destroy$),
            )
            .subscribe((value) => {
                this.open = true;

                if (this.isOpenedFilters) {
                    this.recipes$$.next(value);
                } else {
                    this.searchedRecipes.next(of(value));
                }
            });
    }

    onSearchChange(searchQuery: string | null): void {
        if (searchQuery) this.search$.next(searchQuery);
    }

    get canOpen(): boolean {
        return !!this.recipes$$.getValue().length;
    }

    extractValueFromEvent(event: Event): string {
        return (event.target as HTMLInputElement)?.value;
    }

    onClick(name: string): void {
        this.name.patchValue(name);
        this.open = false;
    }

    @tuiPure
    get name(): FormControl {
        return this.searchForm.controls.name as FormControl;
    }

    @tuiPure
    get category(): FormControl {
        return this.searchForm.controls.category as FormControl;
    }

    @tuiPure
    get kitchen(): FormControl {
        return this.searchForm.controls.kitchen as FormControl;
    }

    @tuiPure
    get preparationTime(): FormControl {
        return this.searchForm.controls.preparationTime as FormControl;
    }

    @tuiPure
    get excludeIngredients(): FormControl {
        return this.searchForm.controls.excludeIngredients as FormControl;
    }

    @tuiPure
    get includeIngredients(): FormControl {
        return this.searchForm.controls.includeIngredients as FormControl;
    }

    readonly ingredientMapper = (
        deafultIngredients: readonly SimpleInterface[],
        changedIngredients: readonly SimpleInterface[] | null,
    ): readonly SimpleInterface[] =>
        deafultIngredients.filter(
            (x) => !(changedIngredients || []).includes(x),
        );

    searchRecipe(): void {
        const recipe = this.searchForm.value;
        const fullString: string[] = [];
        const categoriesPartQuery = contructCategory(recipe.category);
        if (categoriesPartQuery) fullString.push(categoriesPartQuery);
        const countryPartQuery = contructCountry(recipe.kitchen);
        if (countryPartQuery) fullString.push(countryPartQuery);
        const cookingTimePartQuery = contructCookingTime(
            recipe.preparationTime,
        );

        if (cookingTimePartQuery) fullString.push(cookingTimePartQuery);

        const namePartQuery = contructNameRecipe(recipe.name);

        if (namePartQuery) fullString.push(namePartQuery);

        const ingredientsPartQuery = contructIngredients(
            recipe.includeIngredients,
            recipe.excludeIngredients,
        );

        fullString.push(ingredientsPartQuery);

        const payload = fullString.join('&').slice(0, -1);
        payload
            ? this.searchedRecipes.emit(
                  this.recipesService.searchRecipe(payload),
              )
            : this.searchedRecipes.emit(
                  this.recipesService.getDefaultRecipes(),
              );
    }
}
