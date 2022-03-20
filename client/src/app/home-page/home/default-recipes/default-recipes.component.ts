import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ICONS_MAPPER } from 'src/libs/consts';
import { Observable } from 'rxjs';
import { Recipe } from 'src/libs/interfaces/shared/recipe';

const CATEGORIES_COUNT = 12;
@Component({
    selector: 'app-default-recipes',
    templateUrl: './default-recipes.component.html',
    styleUrls: ['./default-recipes.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultRecipesComponent {
    readonly categoriesCount = CATEGORIES_COUNT;

    activeBtnArray = Array(this.categoriesCount).fill(false);

    categoryRecipes$: Observable<readonly Recipe[]> = new Observable();

    index = 0;

    categories$ = this.recipesService.getCategories().pipe(
        map((categories) =>
            (categories as string[]).sort(() => Math.random() - 0.5),
        ),
        map((categories: string[]) => {
            categories[0] = 'Салаты';
            this.activeBtnArray[0] = true;

            this.categoryRecipes$ = this.recipesService
                .getRecipeByCategory(categories[0])
                .pipe(shareReplay(1));
            return categories.map((category) => {
                return {
                    label: category,
                    icon: ICONS_MAPPER[category],
                };
            });
        }),
    );

    constructor(private readonly recipesService: RecipesApiService) {}

    isActive(index: number): string {
        return this.activeBtnArray[index] ? 'custom' : 'whiteblock';
    }

    loadCategory(index: number, category: string):void {
        this.activeBtnArray = Array(this.categoriesCount).fill(false);
        this.activeBtnArray[index] = true;
        this.categoryRecipes$ = this.categoryRecipes$.pipe(
            switchMap((_) =>
                this.recipesService.getRecipeByCategory(category),
            ),
            shareReplay(1),
        );
    }
}
