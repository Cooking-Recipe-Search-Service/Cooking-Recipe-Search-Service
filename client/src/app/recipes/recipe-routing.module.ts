import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FullRecipeComponent } from './recipes-page/full-recipe/full-recipe.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';

const routes: Routes = [
    {
        path: 'recipe/:id',
        component: FullRecipeComponent,
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
