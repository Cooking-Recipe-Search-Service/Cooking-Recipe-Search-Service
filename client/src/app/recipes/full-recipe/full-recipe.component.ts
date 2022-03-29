import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';

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
            this.value = recipe.portion_quantity;
            return recipe;
        }),
    );

    value = 0;

    constructor(
        private readonly recipesService: RecipesApiService,
        private readonly route: ActivatedRoute,
    ) {}
}
