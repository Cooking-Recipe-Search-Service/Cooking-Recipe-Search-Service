import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '@app/interfaces';
import { LocalStorageRecipesService } from '@app/shared/services';
import { LocalStorageUserService } from '@app/shared/services';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    user$: Observable<Profile | null> = this.localStorage.getUser();

    activeTab = 0;

    isOpenProfileCompanent = false;

    constructor(
        private readonly localStorage: LocalStorageUserService,
        private readonly localStorageRecipes: LocalStorageRecipesService,
        private readonly location: Location,
        private readonly router: Router,
    ) {}

    logout(): void {
        this.localStorage.logoutUser();
        this.localStorageRecipes.removeRecipes();
        if (this.location.path().match(/profile/))
            this.router.navigate(['/recipes']);
    }
}
