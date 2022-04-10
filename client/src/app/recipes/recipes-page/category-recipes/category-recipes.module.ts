import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRecipesComponent } from './category-recipes.component';
import { RecipePreviewModule } from '../recipe-preview/recipe-preview.module';



@NgModule({
  declarations: [
    CategoryRecipesComponent
  ],
  imports: [
    CommonModule,RecipePreviewModule
  ],
  exports:[CategoryRecipesComponent]
})
export class CategoryRecipesModule { }
