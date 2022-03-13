import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
    EMPTY_ARRAY,
    setNativeFocused,
    TUI_DEFAULT_MATCHER,
} from '@taiga-ui/cdk';
import { isEditingKey, TuiDataListComponent } from '@taiga-ui/core';
import { Ingredients } from 'src/libs/interfaces';

@Component({
    selector: 'app-custom-list',
    templateUrl: './custom-list.component.html',
    styleUrls: ['./custom-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomListComponent {
    @Input() items: readonly Ingredients[] = [];

    value = '';

    readonly all = EMPTY_ARRAY;

    readonly filter = TUI_DEFAULT_MATCHER;

    onArrowDown(list: TuiDataListComponent<string>, input: any): void {
        list.onFocus(input.target, true);
    }

    onKeyDown(key: string, element: any): void {
        if (element.nativeFocusableElement && isEditingKey(key)) {
            setNativeFocused(element.nativeFocusableElement, true, true);
        }
    }
}
