import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageRoutingModule } from './registartion-page.routing.module';
import { RegistrationFormModule } from './registration-form/registration-form.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RegistrationPageRoutingModule,
        RegistrationFormModule,
    ],
})
export class RegistrationPageModule {}
