import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { TuiContextWithImplicit, TuiStringHandler } from '@taiga-ui/cdk';
import { Subject } from 'rxjs';
import { SimpleInterface } from 'src/libs/interfaces';

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

    @Input() values: readonly SimpleInterface[] | null = [];

    @Input() label = '';

    private readonly search$ = new Subject<string>();

    onSearch(search: string | null) {
        this.search$.next(search || '');
    }

    readonly stringify: TuiStringHandler<
        SimpleInterface | TuiContextWithImplicit<SimpleInterface>
    > = (item) => ('name' in item ? item.name : item.$implicit.name);
}
