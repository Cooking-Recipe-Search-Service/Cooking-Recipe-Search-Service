import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { TuiSvgModule } from '@taiga-ui/core';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule,TuiSvgModule],
    exports: [SearchComponent],
})
export class SearchModule {}
