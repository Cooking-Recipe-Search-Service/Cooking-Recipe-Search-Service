import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DefaultRecipesModule } from './default-recipes/default-recipes.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, DefaultRecipesModule],
    exports: [HomeComponent],
})
export class HomeModule {}
