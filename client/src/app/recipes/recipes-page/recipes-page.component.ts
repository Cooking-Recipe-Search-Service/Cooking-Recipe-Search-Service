import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { RecipeBack } from 'src/libs/interfaces';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {
    recipes$ = this.recipiesApi.getDefaultRecipes();

    searchedRecipes$!: Observable<readonly RecipeBack[]>;
    
    constructor(private readonly recipiesApi: RecipesApiService) {}

    loadRecipes(recipes: Observable<readonly RecipeBack[]>): void {
        this.searchedRecipes$ = recipes;
    }

    
}
