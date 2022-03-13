import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent,
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
