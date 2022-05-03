import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiNotificationContentContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
    selector: 'app-need-login-notification',
    templateUrl: './need-login-notification.component.html',
    styleUrls: ['./need-login-notification.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeedLoginNotificationComponent {
    constructor(
        private socialAuthService: SocialAuthService,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiNotificationContentContext<void, string>,
        private router: Router,
    ) {}

    onCloseClick(): void {
        this.context.closeHook();
    }

    loginWithGoogle(): void {
        this.context.closeHook();
        this.socialAuthService
            .signIn(GoogleLoginProvider.PROVIDER_ID)
            .then(() => this.router.navigate(['recipes']));
    }
}
