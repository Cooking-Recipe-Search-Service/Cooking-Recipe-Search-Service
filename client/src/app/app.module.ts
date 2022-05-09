import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModule } from './recipes/recipes.module';
import {
    TuiNotificationsModule,
    TuiRootModule,
    TUI_SANITIZER,
} from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { environment } from 'src/environments/environment';
import { HOST_API, TOKEN_TYPE } from 'src/libs/consts';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './navbar/navbar.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { NotificationServiceModule } from './shared/services/notifications/notification-service.module';
import { RegistrationFormModule } from './registration-page/registration-form/registration-form.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RecipesModule,
        TuiRootModule,
        HttpClientModule,
        NavbarModule,
        TuiNotificationsModule,
        ProfilePageModule,
        NotificationServiceModule,
        RegistrationFormModule,
    ],
    providers: [
        { provide: HOST_API, useValue: environment.hostApi },
        { provide: TOKEN_TYPE, useValue: 'Bearer' },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
