import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CategoryRecipesComponent } from './recipes-page/category-recipes/category-recipes.component';
import { FullRecipeComponent } from './recipes-page/full-recipe/full-recipe.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';

const routes: Routes = [
    {
        path: '',
        component: RecipesPageComponent,
    },
    {
        path: 'recipe/:id',
        component: FullRecipeComponent,
    },
    {
        path: ':category',
        component: CategoryRecipesComponent,
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipeRoutingModule {}
