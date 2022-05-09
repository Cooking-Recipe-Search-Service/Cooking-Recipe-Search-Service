import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TuiContextWithImplicit, TuiStringHandler } from '@taiga-ui/cdk';
import { Subject } from 'rxjs';
import { SimpleInterface } from 'src/libs/interfaces';

@Component({
    selector: 'app-ingredients-search',
    templateUrl: './ingredients-search.component.html',
    styleUrls: ['./ingredients-search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsSearchComponent {
    @Input() control!: FormControl;

    @Input() values: readonly SimpleInterface[] = [];

    private readonly search$ = new Subject<string>();

    onSearch(search: string | null):void {
        this.search$.next(search || '');
    }

    readonly stringify: TuiStringHandler<
        SimpleInterface | TuiContextWithImplicit<SimpleInterface>
    > = (item) => ('name' in item ? item.name : item.$implicit.name);
}
