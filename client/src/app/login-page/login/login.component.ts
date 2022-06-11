import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { NotificationService } from 'src/app/shared/services/notifications/notification.service';
import { ProfileWithRecipes } from 'src/libs/interfaces';
import { length } from './validators';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Поле обязательно для заполнения',
            },
        },
    ],
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl(null, [length(3), Validators.required]),
        password: new FormControl(null, [length(3), Validators.required]),
    });

    constructor(
        private readonly authService: AuthService,
        private readonly notificationService: NotificationService,
        private router: Router,
    ) {}

    login(): void {
        const user = this.loginForm.value;
        this.authService
            .loginUser(user)
            .pipe(
                map((response: ProfileWithRecipes) => {
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
