import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsSearchComponent } from './ingredients-search.component';
import { CustomListComponent } from './custom-list/custom-list.component';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiFilterPipeModule, TuiLetModule } from '@taiga-ui/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiMultiSelectModule, TuiSelectModule } from '@taiga-ui/kit';

@NgModule({
    declarations: [IngredientsSearchComponent, CustomListComponent],
    imports: [
        CommonModule,
        TuiDataListModule,
        TuiButtonModule,
        TuiFilterPipeModule,
        FormsModule,
        ReactiveFormsModule,
        TuiSelectModule,
        TuiLetModule,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        TuiPrimitiveTextfieldModule,
    ],
    exports: [IngredientsSearchComponent],
})
export class IngredientsSearchModule {}
