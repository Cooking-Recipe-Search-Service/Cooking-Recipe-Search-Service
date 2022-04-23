import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsSearchComponent } from './ingredients-search.component';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiMultiSelectModule,
} from '@taiga-ui/kit';

@NgModule({
    declarations: [IngredientsSearchComponent],
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
    exports: [IngredientsSearchComponent],
})
export class IngredientsSearchModule {}
