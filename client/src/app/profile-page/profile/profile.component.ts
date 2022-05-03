import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    constructor(
        private router: Router,
        private socialAuthService: SocialAuthService,
    ) {}
}
