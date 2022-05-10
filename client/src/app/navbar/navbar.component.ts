import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { Profile } from 'src/libs/interfaces';
import { AuthService } from '../shared/services/api/auth.service';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class NavbarComponent {
    activeTab = 0;

    isOpenProfileCompanent = false;

    user$: Observable<Profile | null> = this.authService.getUser();

    constructor(
        private localStorage: LocalStorageService,
        private readonly authService: AuthService,
    ) {
        // this.token$ = this.localStorage.getToken();
    }

    logout() {
        //
    }
}
