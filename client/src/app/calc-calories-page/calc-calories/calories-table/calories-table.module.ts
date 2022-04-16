import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaloriesTableComponent } from './calories-table.component';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    TuiInputModule,
    TuiInputNumberModule,
} from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
    declarations: [CaloriesTableComponent],
    imports: [
        CommonModule,
        TuiTableModule,
        TuiButtonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputNumberModule,
        TuiInputModule,
        TuiDataListModule,
        TuiLetModule,
        TuiTextfieldControllerModule

    ],
    exports: [CaloriesTableComponent],
})
export class CaloriesTableModule {}
