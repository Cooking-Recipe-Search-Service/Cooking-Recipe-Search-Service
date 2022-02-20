import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_ARROW } from '@taiga-ui/kit';
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

    showFilters() {
        this.open = !this.open;
        this.btnText = this.open ? SHOW_FILTERS : HIDE_FILTERS;
    }

    searchRecipe() {
        const recipe = this.searchForm.controls.recipeSearch.value;
    }
}
