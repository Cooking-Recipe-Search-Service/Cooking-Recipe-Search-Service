import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page.component';
import { SearchModule } from './search/search.module';
import { DefaultRecipesModule } from './default-recipes/default-recipes.module';
import { RecipePreviewModule } from './recipe-preview/recipe-preview.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryRecipesModule } from './category-recipes/category-recipes.module';
import { FullRecipeModule } from './full-recipe/full-recipe.module';
import { TuiLoaderModule } from '@taiga-ui/core';

@NgModule({
    declarations: [RecipesPageComponent],
    imports: [
        CommonModule,
        SearchModule,
        DefaultRecipesModule,
        RecipePreviewModule,
        FullRecipeModule,
        FormsModule,
        ReactiveFormsModule,
        CategoryRecipesModule,
        TuiLoaderModule,
    ],
    exports: [RecipesPageComponent],
})
export class RecipesPageModule {}
