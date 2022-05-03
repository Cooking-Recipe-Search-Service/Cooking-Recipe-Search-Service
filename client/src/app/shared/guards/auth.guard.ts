import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Profile } from 'src/libs/interfaces';
import { NotificationService } from '../services/notifications/notification.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private socialAuthService: SocialAuthService,
        private readonly notificationService: NotificationService,
    ) {}

    canActivate(): Observable<boolean> {
        return this.socialAuthService.authState.pipe(
            map((socialUser: Profile) => !!socialUser),
            tap((isLoggedIn: boolean) => {
                if (!isLoggedIn) {
                    this.notificationService.showNeedLoginNotification();
                }
            }),
        );
    }
}
