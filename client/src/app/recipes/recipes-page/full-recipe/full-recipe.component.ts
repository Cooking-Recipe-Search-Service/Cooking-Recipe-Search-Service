import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { RecipesApiService } from '@app/shared/services';

@Component({
    selector: 'app-full-recipe',
    templateUrl: './full-recipe.component.html',
    styleUrls: ['./full-recipe.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullRecipeComponent {
    recipe$ = this.route.params.pipe(
        map((response) => response.id),
        switchMap((recipeId) => this.recipesService.getRecipeById(recipeId)),
        map((recipe) => {
            this.value = recipe.portionQuantity;
            return recipe;
        }),
    );

    value = 0;

    constructor(
        private readonly recipesService: RecipesApiService,
        private readonly route: ActivatedRoute,
    ) {}
}
