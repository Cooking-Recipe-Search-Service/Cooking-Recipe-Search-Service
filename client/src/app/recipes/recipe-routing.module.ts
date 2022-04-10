import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CategoryRecipesComponent } from './recipes-page/category-recipes/category-recipes.component';
import { FullRecipeComponent } from './recipes-page/full-recipe/full-recipe.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { SearchComponent } from './recipes-page/search/search.component';

const routes: Routes = [
    {
        path: 'recipe/:id',
        component: FullRecipeComponent,
    },
    {
        path: 'search',
        component: SearchComponent,
    },
    {
        path: ':category',
        component: CategoryRecipesComponent,
    },
    {
        path: '',
        component: RecipesPageComponent,
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipeRoutingModule {}
