import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Observable, of } from 'rxjs';

import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { DEFAULT_COOKING_TIME } from 'src/libs/consts';
import { Recipe, SimpleInterface } from 'src/libs/interfaces';

import {
    contructCategory,
    contructCookingTime,
    contructCountry,
    contructIngredients,
    contructNameRecipe,
} from './helpers/query-contrustor-funcs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    @Input() form!: FormGroup;

    @Output() searchedRecipes: EventEmitter<Observable<readonly Recipe[]>> =
        new EventEmitter<Observable<readonly Recipe[]>>();

    readonly searchForm = new FormGroup({
        recipeSearch: new FormControl('', [Validators.minLength(3)]),
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

    includeIngredientsChanged!: readonly SimpleInterface[];

    excludeIngredientsChanged!: readonly SimpleInterface[];

    constructor(private readonly recipesService: RecipesApiService) {
        this.searchForm.controls.includeIngredients.valueChanges.subscribe(
            (value) => (this.includeIngredientsChanged = value),
        );
        this.searchForm.controls.excludeIngredients.valueChanges.subscribe(
            (value) => (this.excludeIngredientsChanged = value),
        );
    }

    get category(): FormControl {
        return this.searchForm.controls.category as FormControl;
    }

    get kitchen(): FormControl {
        return this.searchForm.controls.kitchen as FormControl;
    }

    get preparationTime(): FormControl {
        return this.searchForm.controls.preparationTime as FormControl;
    }

    get excludeIngredients(): FormControl {
        return this.searchForm.controls.excludeIngredients as FormControl;
    }

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

        const namePartQuery = contructNameRecipe(recipe.recipeSearch);

        if (namePartQuery) fullString.push(namePartQuery);

        const ingredientsPartQuery = contructIngredients(
            recipe.includeIngredients,
            recipe.excludeIngredients,
        );

        fullString.push(ingredientsPartQuery);

        const payload = fullString.join('&').slice(0, -1);

        this.recipesService.searchRecipe(payload);
        this.searchedRecipes.emit(this.recipesService.searchRecipe(payload));
    }
}
