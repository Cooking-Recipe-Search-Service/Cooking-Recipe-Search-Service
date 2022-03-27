import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FullRecipeModule } from './full-recipe/full-recipe.module';

@NgModule({
    imports: [
        CommonModule,
        SearchModule,
        RecipeRoutingModule,
        FullRecipeModule,
    ],
})
export class RecipesModule {}
