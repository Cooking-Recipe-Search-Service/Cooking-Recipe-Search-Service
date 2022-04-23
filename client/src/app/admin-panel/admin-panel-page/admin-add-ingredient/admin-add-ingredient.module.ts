import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddIngredientComponent } from './admin-add-ingredient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiInputModule,
    TuiInputNumberModule,
} from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
    declarations: [AdminAddIngredientComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiComboBoxModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiInputNumberModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
    ],
    exports: [AdminAddIngredientComponent],
})
export class AdminAddIngredientModule {}
