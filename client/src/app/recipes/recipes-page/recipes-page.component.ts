import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {
    readonly searchForm = new FormGroup({
        recipeSearch: new FormControl('', [Validators.minLength(3)]),
        category: new FormControl(null),
        kitchen: new FormControl(null),
        preparationTime: new FormControl(null),
        excludeIngredients: new FormControl([]),
        includeIngredients: new FormControl([]),
    });

    recipes$ = this.recipiesApi.getDefaultRecipes();

    constructor(private readonly recipiesApi: RecipesApiService) {}
}
