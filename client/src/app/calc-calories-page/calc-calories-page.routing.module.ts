import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CalcCaloriesComponent } from './calc-calories/calc-calories.component';

const routes: Routes = [
    {
        path: '',
        component: CalcCaloriesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CalcCaloriesPageRoutingModule {}
