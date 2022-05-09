import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { LoginPageRoutingModule } from './login-page.routing.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, LoginModule, LoginPageRoutingModule],
})
export class LoginPageModule {}
