import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewChild,
} from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Recipe } from 'src/libs/interfaces/shared/recipe';

@Component({
    selector: 'app-recipe-preview',
    templateUrl: './recipe-preview.component.html',
    styleUrls: ['./recipe-preview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipePreviewComponent {
    @Input() recipe!: Recipe;

    @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;

    open = false;

    onClick() {
        this.open = false;

        if (this.component && this.component.nativeFocusableElement) {
            this.component.nativeFocusableElement.focus();
        }
    }
}
