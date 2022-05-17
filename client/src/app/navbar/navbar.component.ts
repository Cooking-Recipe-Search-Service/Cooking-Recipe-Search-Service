import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/libs/interfaces';
import { LocalStorageRecipesService } from '../shared/services/local-storage/local-storage-recipes.service';
import { LocalStorageUserService } from '../shared/services/local-storage/local-storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    token$ = this.localStorage.getToken();

    user$: Observable<Profile | null> = this.localStorage.getUser();

    activeTab = 0;

    isOpenProfileCompanent = false;

    constructor(
        private localStorage: LocalStorageUserService,
        private readonly localStorageRecipes: LocalStorageRecipesService,
    ) {}

    logout(): void {
        this.localStorage.logoutUser();
        this.localStorageRecipes.removeRecipes();
    }
}
