import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        TuiInputModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        FormsModule,
        ReactiveFormsModule,
        TuiHostedDropdownModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiPrimitiveTextfieldModule,
        ScrollingModule,
    ],
    exports: [SearchComponent],
})
export class SearchModule {}
