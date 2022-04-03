import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    @Input() form!: FormGroup;

    size: SIZE = 'm';

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
        return this.form.controls.category as FormControl;
    }

    get kitchen(): FormControl {
        return this.form.controls.kitchen as FormControl;
    }

    get preparationTime(): FormControl {
        return this.form.controls.preparationTime as FormControl;
    }

    get excludeIngredients(): FormControl {
        return this.form.controls.excludeIngredients as FormControl;
    }

    get includeIngredients(): FormControl {
        return this.form.controls.includeIngredients as FormControl;
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
