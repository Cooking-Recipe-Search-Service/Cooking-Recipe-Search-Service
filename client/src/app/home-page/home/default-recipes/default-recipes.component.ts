import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesApiService } from 'src/app/recipes/shared/services/recipes-api-service.service';
import { map } from 'rxjs/operators';
import { ICONS_MAPPER } from 'src/libs/consts';
@Component({
    selector: 'app-default-recipes',
    templateUrl: './default-recipes.component.html',
    styleUrls: ['./default-recipes.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultRecipesComponent {
    categories$ = this.recipesService.getCategories().pipe(
        map((categories) =>
            categories.map((category) => {
                return {
                    label: category,
                    icon: ICONS_MAPPER[category],
                };
            }),
        ),
    );

    constructor(private readonly recipesService: RecipesApiService) {}
}
