import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import {
    ARROW_DOWN,
    ARROW_UP,
    HIDE_FILTERS,
    SHOW_FILTERS,
    SIZE,
} from 'src/libs/consts';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    readonly searchForm = new FormGroup({
        recipeSearch: new FormControl('', [Validators.minLength(3)]),
        category: new FormControl(null),
        kitchen: new FormControl(null),
        preparationTime: new FormControl(null),
        excludeIngredients: new FormControl([]),
        includeIngredients: new FormControl([]),
    });

    size: SIZE = 'm'

    btnText = SHOW_FILTERS;

    searched = '';

    open = false;

    arrow = ARROW_DOWN;

    readonly defaultSearchValues$ = forkJoin({
        categories: this.recipesService.getCategories(),
        kitchen: this.recipesService.getKitchen(),
        time: this.recipesService.getTime(),
    });

    readonly ingredients$ = this.recipesService.getIngredients();

    constructor(private readonly recipesService: RecipesApiService) {}

    get category(): FormControl {
        return this.searchForm.controls.category as FormControl;
    }

    get kitchen(): FormControl {
        return this.searchForm.controls.kitchen as FormControl;
    }

    get preparationTime(): FormControl {
        return this.searchForm.controls.preparationTime as FormControl;
    }

    get excludeIngredients(): FormControl {
        return this.searchForm.controls.excludeIngredients as FormControl;
    }

    get includeIngredients(): FormControl {
        return this.searchForm.controls.includeIngredients as FormControl;
    }

    showFilters(): void {
        this.btnText = this.open ? SHOW_FILTERS : HIDE_FILTERS;
        this.arrow = this.open ? ARROW_DOWN : ARROW_UP;
        this.open = !this.open;
    }

    searchRecipe(): void {
        // const recipe = this.searchForm.controls.recipeSearch.value;
    }
}
