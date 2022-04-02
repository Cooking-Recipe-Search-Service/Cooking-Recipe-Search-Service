import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MainHomeScreenComponent } from './main-home-screen/main-home-screen.component';

const routes: Routes = [
    {
        path: '',
        component: MainHomeScreenComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InteractiveMapPageRoutingModule {}
