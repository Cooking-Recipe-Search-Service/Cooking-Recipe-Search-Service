import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModule } from './recipes/recipes.module';
import { TuiRootModule, TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { environment } from 'src/environments/environment';
import { HOST_API } from 'src/libs/consts';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './navbar/navbar.module';

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
    ],
    providers: [
        { provide: HOST_API, useValue: environment.hostApi },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
