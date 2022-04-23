import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AdminAddIngredientComponent } from './admin-panel-page/admin-add-ingredient/admin-add-ingredient.component';
import { AdminAddRecipeComponent } from './admin-panel-page/admin-add-recipe/admin-add-recipe.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';

const routes: Routes = [
    {
        path: 'add-ingredients',
        component: AdminAddIngredientComponent,
    },
    {
        path: 'add-recipes',
        component: AdminAddRecipeComponent,
    },

    {
        path: '',
        component: AdminPanelPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
