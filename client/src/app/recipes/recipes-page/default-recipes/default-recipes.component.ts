import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { map, shareReplay } from 'rxjs/operators';
import { CATEGORIES_MAPPER, ROUTER_MAPPER } from 'src/libs/consts';
import { Observable } from 'rxjs';
import { Recipe } from 'src/libs/interfaces/shared/recipe';
import { Router } from '@angular/router';

const CATEGORIES_COUNT = 12;
@Component({
    selector: 'app-default-recipes',
    templateUrl: './default-recipes.component.html',
    styleUrls: ['./default-recipes.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultRecipesComponent {
    readonly categoriesCount = CATEGORIES_COUNT;

    activeBtnArray = Array(this.categoriesCount).fill(false);

    categoryRecipes$: Observable<readonly Recipe[]> = new Observable();

    index = 0;

    size = 'm';

    categories$ = this.recipesService.getCategories().pipe(
        map((categories) =>
            (categories as string[]).sort(() => Math.random() - 0.5),
        ),
        map((categories: string[]) => {
            this.activeBtnArray[0] = true;

            this.categoryRecipes$ = this.recipesService
                .getRecipeByCategory(categories[0])
                .pipe(shareReplay(1));
            return categories.map((category) => {
                return {
                    label: category,
                    icon: CATEGORIES_MAPPER[category],
                };
            });
        }),
    );

    routeMapper = ROUTER_MAPPER;

    constructor(
        private readonly recipesService: RecipesApiService,
        private readonly router: Router,
    ) {}

    isActive(index: number): string {
        return this.activeBtnArray[index] ? 'primary' : 'whiteblock';
    }

    loadCategory(category: string) {
        this.router.navigate([`/recipes`, this.routeMapper[category]]);
    }

    // loadCategory(index: number, category: string): void {
    //     this.activeBtnArray = Array(this.categoriesCount).fill(false);
    //     this.activeBtnArray[index] = true;
    //     this.categoryRecipes$ = this.categoryRecipes$.pipe(
    //         switchMap((_) => this.recipesService.getRecipeByCategory(category)),
    //         shareReplay(1),
    //     );
    //     index = 0;
    // }
}
