import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectWithSearchComponent } from './select-with-search.component';
import {  TuiSelectModule } from '@taiga-ui/kit';
import { TuiDataListModule, TuiPrimitiveTextfieldModule } from '@taiga-ui/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TuiFilterPipeModule, TuiLetModule } from '@taiga-ui/cdk';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SelectWithSearchComponent],
    imports: [
        CommonModule,
        TuiSelectModule,
        TuiDataListModule,
        ScrollingModule,
        TuiPrimitiveTextfieldModule,
        TuiLetModule,
        TuiFilterPipeModule,
        FormsModule
    ],
    exports: [SelectWithSearchComponent],
})
export class SelectWithSearchModule {}
