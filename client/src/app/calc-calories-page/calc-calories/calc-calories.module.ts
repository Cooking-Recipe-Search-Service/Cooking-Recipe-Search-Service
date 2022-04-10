import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcCaloriesComponent } from './calc-calories.component';
import { CaloriesTableModule } from './calories-table/calories-table.module';

@NgModule({
    declarations: [CalcCaloriesComponent],
    imports: [CommonModule, CaloriesTableModule],
    exports: [CalcCaloriesComponent],
})
export class CalcCaloriesModule {}
