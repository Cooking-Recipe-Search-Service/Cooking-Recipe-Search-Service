import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddRecipeComponent } from './admin-add-recipe.component';
import { TuiInputFileModule } from '@taiga-ui/kit';
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiFilterByInputPipeModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiMultiSelectModule,
    TuiStringifyContentPipeModule,
    TuiTextAreaModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
    declarations: [AdminAddRecipeComponent],
    imports: [
        CommonModule,
        TuiInputModule,
        TuiInputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,

        TuiDataListWrapperModule,
        TuiComboBoxModule,
        TuiStringifyContentPipeModule,
        TuiFilterByInputPipeModule,
        TuiLetModule,
        TuiTextAreaModule,
        TuiMultiSelectModule,
        TuiButtonModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiInputFileModule,
    ],
    exports: [AdminAddRecipeComponent],
})
export class AdminAddRecipeModule {}
