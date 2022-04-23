import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { SimpleInterface } from 'src/libs/interfaces';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    @Input() form!: FormGroup;

    searched = '';

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
        time: this.recipesService.getPreparingTime(),
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
        // const recipe = this.searchForm.controls.recipeSearch.value;
    }
}