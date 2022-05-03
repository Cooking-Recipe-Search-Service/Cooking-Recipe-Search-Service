import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {  SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Profile } from 'src/libs/interfaces';

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

    user$: Observable<Profile> = this.socialAuthService.authState.pipe(
        takeUntil(this.destroy$),
    );

    constructor(
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
