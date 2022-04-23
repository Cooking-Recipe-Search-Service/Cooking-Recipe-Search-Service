import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./interactive-map-page/interactive-map-page.module').then(
                (m) => m.InteractiveMapPageModule,
            ),
    },
    {
        path: 'calc-calories',
        loadChildren: () =>
            import('./calc-calories-page/calc-calories-page.module').then(
                (m) => m.CalcCaloriesPageModule,
            ),
    },

    {
        path: 'home',
        loadChildren: () =>
            import('./home-page/home-page.module').then(
                (m) => m.HomePageModule,
            ),
    },
    {
        path: 'recipes',
        loadChildren: () =>
            import('./recipes/recipes.module').then((m) => m.RecipesModule),
    },
    {
        path: 'admin-panel',
        loadChildren: () =>
            import('./admin-panel/admin-panel.module').then(
                (m) => m.AdminPanelModule,
            ),
    },

    {
        path: '**',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
