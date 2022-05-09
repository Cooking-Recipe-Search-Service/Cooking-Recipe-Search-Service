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

    showErrorMessage(): void {
        this.notificationsService
            .show(`Что-то пошло не так!`, {
                label: ``,
                status: TuiNotification.Error,
                hasIcon: false,
                autoClose: 3000,
            })
            .subscribe();
    }

    showLoginSuccess(name: string): void {
        this.notificationsService
            .show(`Добро пожаловать, ${name}`, {
                label: ``,
                status: TuiNotification.Info,
                hasIcon: false,
                autoClose: 3000,
            })
            .subscribe();
    }

    showRegisterSuccess(): void {
        this.notificationsService
            .show('Регистрация прошла успешно', {
                label: ``,
                status: TuiNotification.Success,
                hasIcon: false,
                autoClose: 3000,
            })
            .subscribe();
    }

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
