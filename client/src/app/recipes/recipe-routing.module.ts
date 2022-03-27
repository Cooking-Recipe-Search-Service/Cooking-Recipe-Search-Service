import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent,
    },
    {
        path: 'recipe/:id',
        component: FullRecipeComponent,
    },
    {
        path: '',
        redirectTo: '/recipes/search',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipeRoutingModule {}
