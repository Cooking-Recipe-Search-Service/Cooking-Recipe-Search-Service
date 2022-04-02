import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectWithSearchComponent } from './select-with-search.component';
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
} from '@taiga-ui/kit';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
    declarations: [SelectWithSearchComponent],
    imports: [
        CommonModule,
        TuiComboBoxModule,
        FormsModule,
        ReactiveFormsModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiTextfieldControllerModule,
    ],
    exports: [SelectWithSearchComponent],
})
export class SelectWithSearchModule {}
