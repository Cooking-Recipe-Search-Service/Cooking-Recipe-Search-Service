import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Profile } from 'src/libs/interfaces';
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

    token$: Observable<string | null> = this.localStorage.getToken();

    user$: Observable<Profile | null> = this.token$.pipe(
        filter((token) => token !== null),
        switchMap((token) => this.authService.getUser(token)),
    );

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
