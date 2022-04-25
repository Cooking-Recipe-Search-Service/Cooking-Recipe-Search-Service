import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { map } from 'rxjs/operators';
import { CATEGORIES_MAPPER, ROUTER_MAPPER } from 'src/libs/consts';



import {  SimpleInterface } from 'src/libs/interfaces';

const CATEGORIES_COUNT = 12;
@Component({
    selector: 'app-default-recipes',
    templateUrl: './default-recipes.component.html',
    styleUrls: ['./default-recipes.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultRecipesComponent {
    @Output() clickedCategory = new EventEmitter<string>();

    readonly categoriesCount = CATEGORIES_COUNT;

    activeBtnArray = Array(this.categoriesCount).fill(false);

    index = 0;

    size = 'm';

    categories$ = this.recipesService.getCategories().pipe(
        map((categories) =>
            (categories as SimpleInterface[]).sort(() => Math.random() - 0.5),
        ),
        map((categories: SimpleInterface[]) => {
            this.activeBtnArray[0] = true;
            this.clickedCategory.emit(categories[0].name);

            return categories.map((category) => {
                return {
                    label: category.name,
                    icon: CATEGORIES_MAPPER[category.name],
                };
            });
        }),
    );

    routeMapper = ROUTER_MAPPER;

    constructor(private readonly recipesService: RecipesApiService) {}

    isActive(index: number): string {
        return this.activeBtnArray[index] ? 'primary' : 'whiteblock';
    }

    loadCategory(category: string,index:number):void {
        
        this.activeBtnArray = Array(this.categoriesCount).fill(false);
        this.activeBtnArray[index] = true;
        this.clickedCategory.emit(category);
    }
}
