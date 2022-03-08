import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

export interface AbstractTypedControl<T> extends AbstractControl {
    getValue(): T;
}
@Component({
    selector: 'app-select-with-search',
    templateUrl: './select-with-search.component.html',
    styleUrls: ['./select-with-search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectWithSearchComponent {
    @Input() control!: FormControl;

    @Input() values: readonly string[] = [];

    @Input() label = '';
}
