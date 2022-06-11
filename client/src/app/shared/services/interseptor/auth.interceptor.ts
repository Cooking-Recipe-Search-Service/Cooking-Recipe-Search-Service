import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LocalStorageUserService } from '../local-storage/local-storage.service';
import { AuthService } from '../api/auth.service';
import { NotificationService } from '../notifications/notification.service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private localStorage: LocalStorageUserService,
        private readonly authService: AuthService,
        private readonly notificationService: NotificationService,
    ) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        this.localStorage
                            .getUser()
                            .pipe(
                                switchMap((user) => {
                                    if (user) {
                                        const { username, password } = user;
                                        return this.authService.loginUser({
                                            username,
                                            password,
                                        });
                                    }
                                    if (
                                        request.url.match(/RecipeToFavorites/)
                                    ) {
                                        this.notificationService.showNeedLoginNotification();
                                    }

                                    return EMPTY;
                                }),
                            )
                            .subscribe();
                    }
                    return throwError(error);
                }
                return throwError(error);
            }),
        );
    }
}
