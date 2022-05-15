import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiHintModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        TuiTabsModule,
        TuiSvgModule,
        RouterModule,
        TuiHintModule,
        TuiLetModule,
        TuiButtonModule,
        TuiSvgModule,
    ],
    exports: [NavbarComponent],
})
export class NavbarModule {}
