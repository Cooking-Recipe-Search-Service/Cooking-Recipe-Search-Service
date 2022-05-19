import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {
    TuiInputModule,
    TuiInputPasswordModule,
    TuiIslandModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        TuiInputModule,
        TuiInputPasswordModule,
        FormsModule,
        ReactiveFormsModule,
        TuiButtonModule,
        RouterModule,
        TuiIslandModule,
        TuiSvgModule,
    ],
    exports: [LoginComponent],
})
export class LoginModule {}
