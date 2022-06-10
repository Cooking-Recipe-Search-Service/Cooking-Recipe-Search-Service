import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/libs/interfaces';
import { LocalStorageRecipesService } from '../shared/services/local-storage/local-storage-recipes.service';
import { LocalStorageUserService } from '../shared/services/local-storage/local-storage.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
        private readonly httpService: HttpClient,
    ) {}

    logout(): void {
        this.localStorage.logoutUser();
        this.localStorageRecipes.removeRecipes();
        if (this.location.path().match(/profile/))
            this.router.navigate(['/recipes']);
    }
}
