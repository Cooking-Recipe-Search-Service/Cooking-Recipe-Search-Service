import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesApiService } from '@app/shared/services';
import { Recipe } from '@app/interfaces';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {
    recipes$ = this.recipiesApi.getDefaultRecipes();

    category = '';

    searchedRecipes$!: Observable<readonly Recipe[]>;

    constructor(private readonly recipiesApi: RecipesApiService) {
        // this.token$ = localStorage.getUser();
    }

    loadRecipes(recipes: Observable<readonly Recipe[]>): void {
        this.searchedRecipes$ = recipes;
    }

    activeCategory(category: string): void {
        this.category = category;
    }
}
