import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiInputModule,
} from '@taiga-ui/kit';
import { SelectWithSearchModule } from '../../../shared/components/select-with-search/select-with-search.module';
import { TuiLetModule, TuiMapperPipeModule } from '@taiga-ui/cdk';

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
        SelectWithSearchModule,
        TuiSvgModule,
        TuiLetModule,
        TuiMapperPipeModule,
        TuiComboBoxModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
    ],
    exports: [SearchComponent],
})
export class SearchModule {}
