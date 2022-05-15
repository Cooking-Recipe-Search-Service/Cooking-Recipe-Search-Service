import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProfileWithRecipes } from 'src/libs/interfaces';
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
    private token$ = this.localStorage.getToken();

    user$: Observable<ProfileWithRecipes | null> = this.token$.pipe(
        switchMap((_) => this.authService.getUser()),
    );

    activeTab = 0;

    isOpenProfileCompanent = false;

    constructor(
        private localStorage: LocalStorageService,
        private readonly authService: AuthService,
    ) {}

    logout(): void {
        this.localStorage.logoutUser();
    }
}
