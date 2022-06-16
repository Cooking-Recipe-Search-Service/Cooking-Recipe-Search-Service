import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiNotificationContentContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-need-login-notification',
    templateUrl: './need-login-notification.component.html',
    styleUrls: ['./need-login-notification.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeedLoginNotificationComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiNotificationContentContext<void, string>,
        private router: Router,
    ) {}

    onCloseClick(): void {
        this.context.closeHook();
    }
}
