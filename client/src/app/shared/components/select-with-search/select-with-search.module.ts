import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectWithSearchComponent } from './select-with-search.component';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiMultiSelectModule,
} from '@taiga-ui/kit';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
    declarations: [SelectWithSearchComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
        TuiMultiSelectModule,
        TuiLetModule,
        TuiFilterByInputPipeModule,
    ],
    exports: [SelectWithSearchComponent],
})
export class SelectWithSearchModule {}
