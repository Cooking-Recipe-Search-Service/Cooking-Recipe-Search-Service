import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@app/shared/services';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
