import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
    imports: [CommonModule, SearchModule, RecipeRoutingModule],
})
export class RecipesModule {}
