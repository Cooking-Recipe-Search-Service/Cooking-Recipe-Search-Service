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
    // {
    //     path: '/',
    //     loadChildren: () =>
    //         import('./interactive-map-page/interactive-map-page.module').then(
    //             (m) => m.InteractiveMapPageModule,
    //         ),
    // },

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
        path: '**',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
