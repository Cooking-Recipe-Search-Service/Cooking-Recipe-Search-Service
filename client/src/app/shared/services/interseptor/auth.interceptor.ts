import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { LocalStorageUserService } from '../local-storage/local-storage.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private localStorage: LocalStorageUserService,
        private readonly authService: AuthService,
        private router: Router,
        private readonly location: Location,
    ) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        this.localStorage.getUser().pipe(
                            switchMap((user) => {
                                if (user) {
                                    const { username, password } = user;
                                    return this.authService.loginUser({
                                        username,
                                        password,
                                    });
                                }
                                return of(null);
                            }),
                            tap((user) =>
                                this.localStorage.setToken(user?.token || null),
                            ),
                        );
                    }
                    return EMPTY;
                }
                return throwError(error);
            }),
        );
    }
}