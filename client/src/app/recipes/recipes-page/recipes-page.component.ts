import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '@app/interfaces';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {
    category = '';

    searchedRecipes$!: Observable<readonly Recipe[]>;

    loadRecipes(recipes: Observable<readonly Recipe[]>): void {
        this.searchedRecipes$ = recipes;
    }

    activeCategory(category: string): void {
        this.category = category;
    }
}
