import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { NotificationService } from 'src/app/shared/services/notifications/notification.service';
import { EMAIL_EXIST, USERNAME_EXIST } from 'src/libs/consts';
import { RegistrationProfile } from 'src/libs/interfaces';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
    registrationForm = new FormGroup({
        username: new FormControl(null, [
            Validators.minLength(3),
            Validators.required,
        ]),
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [
            Validators.minLength(3),
            Validators.required,
        ]),
    });

    constructor(
        private readonly authService: AuthService,
        private router: Router,
        private readonly notificationService: NotificationService,
    ) {}

    register(): void {
        const user: RegistrationProfile = {
            ...this.registrationForm.value,
            role: 'ROLE_USER',
        };
        this.authService
            .registerUser(user)
            .pipe(
                map((_) => {
                    this.router.navigate(['/login']);
                    this.notificationService.showRegisterSuccess();
                }),
                catchError((error) => {
                    if (error.error === USERNAME_EXIST) {
                        this.registrationForm.controls.username.setErrors({
                            unique: 'Данный пользователь уже существует',
                        });
                    }
                    if (error.error === EMAIL_EXIST) {
                        this.registrationForm.controls.email.setErrors({
                            unique: 'Такая почта уже занята',
                        });
                    }
                    return EMPTY;
                }),
            )
            .subscribe();
    }
}
