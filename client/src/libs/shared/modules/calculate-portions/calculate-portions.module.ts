import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcPortionsPipe } from './calc-portions.pipe';

@NgModule({
    declarations: [CalcPortionsPipe],
    imports: [CommonModule],
    exports: [CalcPortionsPipe],
})
export class CalculatePortionsModule {}
