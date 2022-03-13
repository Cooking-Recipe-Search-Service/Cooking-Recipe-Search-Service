import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { SelectWithSearchModule } from '../shared/components/select-with-search/select-with-search.module';
import { IngredientsSearchModule } from '../shared/components/ingredients-search/ingredients-search.module';

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
        IngredientsSearchModule,
    ],
    exports: [SearchComponent],
})
export class SearchModule {}
