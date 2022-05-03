import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {  SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
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

    user$: Observable<Profile | null> = this.socialAuthService.authState

    constructor(
        private localStorage: LocalStorageService,
        private socialAuthService: SocialAuthService,
        private router: Router,
        private readonly destroy$: TuiDestroyService,
    ) {}

    logout(): void {
        this.socialAuthService
            .signOut()
            .then(() => this.router.navigate(['recipes']));
    }
}
