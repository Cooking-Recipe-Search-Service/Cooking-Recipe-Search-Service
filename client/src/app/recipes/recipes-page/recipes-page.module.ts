import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page.component';
import { SearchModule } from './search/search.module';
import { DefaultRecipesModule } from './default-recipes/default-recipes.module';
import { FullRecipeModule } from './full-recipe/full-recipe.module';
import { RecipePreviewModule } from './recipe-preview/recipe-preview.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryRecipesModule } from './category-recipes/category-recipes.module';

@NgModule({
    declarations: [RecipesPageComponent],
    imports: [
        CommonModule,
        SearchModule,
        DefaultRecipesModule,
        FullRecipeModule,
        RecipePreviewModule,
        FormsModule,
        ReactiveFormsModule,
        CategoryRecipesModule,
    ],
    exports: [RecipesPageComponent],
})
export class RecipesPageModule {}
