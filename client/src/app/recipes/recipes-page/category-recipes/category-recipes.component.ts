import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesApiService } from '@app/shared/services';
import { REVERSE_ROUTER_MAPPER } from '@app/consts';
import { Recipe } from '@app/interfaces';

@Component({
    selector: 'app-category-recipes',
    templateUrl: './category-recipes.component.html',
    styleUrls: ['./category-recipes.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryRecipesComponent {
    @Input() set category(category: string) {
        this.activeCategory = category;

        this.recipes$ = this.recipesService.searchRecipe(
            `category.name=${category}`,
        );
    }

    activeCategory = '';

    routerMapper = REVERSE_ROUTER_MAPPER;

    recipes$!: Observable<readonly Recipe[]>;

    constructor(private readonly recipesService: RecipesApiService) {}
}
