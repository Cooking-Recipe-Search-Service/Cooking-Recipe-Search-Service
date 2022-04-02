import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page.component';
import { SearchModule } from './search/search.module';
import { DefaultRecipesModule } from './default-recipes/default-recipes.module';
import { FullRecipeModule } from './full-recipe/full-recipe.module';



@NgModule({
  declarations: [
    RecipesPageComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    DefaultRecipesModule,
    FullRecipeModule
  ],
  exports:[RecipesPageComponent]
})
export class RecipesPageModule { }
