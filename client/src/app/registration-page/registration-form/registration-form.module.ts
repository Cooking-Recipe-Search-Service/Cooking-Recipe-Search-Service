import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form.component';
import {
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [RegistrationFormComponent],
    imports: [
        CommonModule,
        TuiInputModule,
        TuiInputPasswordModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TuiButtonModule,
        HttpClientModule,
        TuiFieldErrorPipeModule,
        TuiErrorModule,
    ],
    exports: [RegistrationFormComponent],
})
export class RegistrationFormModule {}
