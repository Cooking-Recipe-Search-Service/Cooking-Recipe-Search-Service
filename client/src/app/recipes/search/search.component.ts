import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_ARROW } from '@taiga-ui/kit';
import { forkJoin } from 'rxjs';
import { RecipesApiService } from 'src/app/recipes/shared/services/recipes-api-service.service';
import { HIDE_FILTERS, SHOW_FILTERS } from 'src/libs/consts';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    readonly searchForm = new FormGroup({
        recipeSearch: new FormControl('', [Validators.minLength(3)]),
        category: new FormControl('Любая'),
        kitchen: new FormControl('Любая'),
        preparationTime: new FormControl('Любое'),
    });

    btnText = SHOW_FILTERS;

    searched = '';

    open = false;

    readonly arrow = TUI_ARROW;

    readonly defaultSearchValues$ = forkJoin({
        categories: this.recipesService.getCategories(),
        kitchen: this.recipesService.getKitchen(),
        time: this.recipesService.getTime(),
    });

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

    // test() {
    //     console.log(this.searchForm);
    // }

    showFilters(): void {
        this.open = !this.open;
        this.btnText = this.open ? SHOW_FILTERS : HIDE_FILTERS;
    }

    // searchRecipe() {
    //     const recipe = this.searchForm.controls.recipeSearch.value;
    // }
}
