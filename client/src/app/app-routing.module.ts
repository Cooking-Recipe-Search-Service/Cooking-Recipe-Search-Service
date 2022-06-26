import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full',
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
        path: 'profile',
        loadChildren: () =>
            import('./profile-page/profile-page.module').then(
                (m) => m.ProfilePageModule,
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./login-page/login-page.module').then(
                (m) => m.LoginPageModule,
            ),
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('./registration-page/registration-page.module').then(
                (m) => m.RegistrationPageModule,
            ),
    },
    {
        path: '**',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top', // or 'top'
            anchorScrolling: 'enabled',
            scrollOffset: [0, 200],
            useHash:true
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
