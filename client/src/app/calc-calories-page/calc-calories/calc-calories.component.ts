import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-calc-calories',
    templateUrl: './calc-calories.component.html',
    styleUrls: ['./calc-calories.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalcCaloriesComponent {}
