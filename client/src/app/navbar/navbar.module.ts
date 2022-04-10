import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TuiTabsModule } from '@taiga-ui/kit';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        TuiTabsModule,
        TuiSvgModule,
        RouterModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
    ],
    exports: [NavbarComponent],
})
export class NavbarModule {}
