import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private localStorage: LocalStorageService,
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
                        // console.log(1)
                        const user = this.localStorage.getUser();
                        if (user) {
                            this.authService
                                .loginUser(user)
                                .subscribe((user) =>
                                    this.localStorage.setToken(user.token),
                                );
                        }
                        // redirect user to the logout page
                    }
                    return EMPTY;
                }
                return throwError(error);
            }),
        );
    }
}
