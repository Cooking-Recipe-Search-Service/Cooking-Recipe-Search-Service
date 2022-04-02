import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DefaultRecipesModule } from './default-recipes/default-recipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { MainHomeScreenModule } from './main-home-screen/main-home-screen.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        DefaultRecipesModule,
        FormsModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiInputModule,
        MainHomeScreenModule,
    ],
    exports: [HomeComponent],
})
export class HomeModule {}
