import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';


@Component({
    selector: 'app-select-with-search',
    templateUrl: './select-with-search.component.html',
    styleUrls: ['./select-with-search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectWithSearchComponent {
    @Input() values: readonly string[] = [];

    @Output() newValue: EventEmitter<string> = new EventEmitter<string>()

    searched = '';

    value = '';

    readonly filter = TUI_DEFAULT_MATCHER;

    setValue(value: string){
      this.newValue.emit(value)
    }


}
