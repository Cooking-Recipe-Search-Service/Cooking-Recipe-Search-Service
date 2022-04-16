import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { REVERSE_ROUTER_MAPPER } from 'src/libs/consts';

@Component({
    selector: 'app-category-recipes',
    templateUrl: './category-recipes.component.html',
    styleUrls: ['./category-recipes.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryRecipesComponent {
    routerMapper = REVERSE_ROUTER_MAPPER;

    category = '';

    readonly recipes$ = this.route.params.pipe(
        map((response) => this.routerMapper[response.category]),
        switchMap((category) => {
            this.category = category;
            return this.recipesService.getRecipeByCategory(category);
        }),
    );

    constructor(
        private readonly route: ActivatedRoute,
        private readonly recipesService: RecipesApiService,
    ) {}
}
