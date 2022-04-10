import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcCaloriesPageRoutingModule } from './calc-calories-page.routing.module';
import { CalcCaloriesModule } from './calc-calories/calc-calories.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, CalcCaloriesPageRoutingModule, CalcCaloriesModule],
})
export class CalcCaloriesPageModule {}
