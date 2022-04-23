import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {
    recipes$ = this.recipiesApi.getDefaultRecipes();

    constructor(private readonly recipiesApi: RecipesApiService) {}
}
