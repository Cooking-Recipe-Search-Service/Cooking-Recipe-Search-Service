import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/shared/services/notifications/notification.service';
import { LoginProfileResponse } from 'src/libs/interfaces';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl(null, [
            Validators.minLength(3),
            Validators.required,
        ]),
        password: new FormControl(null, [
            Validators.minLength(3),
            Validators.required,
        ]),
    });

    constructor(
        private readonly authService: AuthService,
        private readonly localStorage: LocalStorageService,
        private readonly notificationService: NotificationService,
        private router: Router,
    ) {}

    login(): void {
        const user = this.loginForm.value;
        this.authService
            .loginUser(user)
            .pipe(
                map((response: LoginProfileResponse) => {
                    this.localStorage.setToken(response.token);
                    this.notificationService.showLoginSuccess(
                        response.username,
                    );
                    this.router.navigate(['/recipes']);
                }),
                catchError((_) => {
                    this.notificationService.showErrorMessage();
                    return EMPTY;
                }),
            )
            .subscribe();
    }
}
