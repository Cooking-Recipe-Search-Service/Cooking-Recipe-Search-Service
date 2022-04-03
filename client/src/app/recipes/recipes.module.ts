import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesPageModule } from './recipes-page/recipes-page.module';

@NgModule({
    imports: [CommonModule, RecipeRoutingModule, RecipesPageModule],
})
export class RecipesModule {}
