import { Inject, Injectable, Injector } from '@angular/core';
import {
    TuiNotification,
    TuiNotificationOptionsWithData,
    TuiNotificationsService,
} from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { NeedLoginNotificationComponent } from './notification/need-login-notification.component';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        @Inject(Injector) private readonly injector: Injector,
    ) {}

    showNeedLoginNotification(): void {
        this.notificationsService
            .show<undefined>(
                new PolymorpheusComponent(
                    NeedLoginNotificationComponent,
                    this.injector,
                ),
                {
                    label: `Вы не авторизованы`,
                    status: TuiNotification.Info,
                    hasIcon: false,
                    autoClose: 3000,
                } as TuiNotificationOptionsWithData<string>,
            )
            .subscribe();
    }
}
