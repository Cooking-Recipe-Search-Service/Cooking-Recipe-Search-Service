import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Profile, ProfileWithRecipes } from 'src/libs/interfaces';
import { AuthService } from '../shared/services/api/auth.service';
import { LocalStorageUserService } from '../shared/services/local-storage/local-storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    token$ = this.localStorage.getToken();

    user$: Observable<Profile | null> = this.localStorage.getUser()

    activeTab = 0;

    isOpenProfileCompanent = false;

    constructor(
        private localStorage: LocalStorageUserService,
        private readonly authService: AuthService,
    ) {
        
    }

    logout(): void {
        this.localStorage.logoutUser();
    }
}
