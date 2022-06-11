import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiInputPasswordModule,
    TuiIslandModule,
} from '@taiga-ui/kit';
import { of, throwError } from 'rxjs';
import { clickManyTimes, findEl } from 'src/app/shared/helpers/test-helpers';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { NotificationService } from 'src/app/shared/services/notifications/notification.service';

import { LoginComponent } from './login.component';
import { mockUser } from './mock-user.mock';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let fakeNotificationService: any;
    let fakeAuthService: any;
    let fakeRouter: any;

    beforeEach(async () => {
        fakeNotificationService = jasmine.createSpyObj(
            'fakeNotificationService',
            ['showLoginSuccess', 'showErrorMessage'],
        );
        fakeAuthService = jasmine.createSpyObj('fakeAuthService', [
            'loginUser',
        ]);
        fakeRouter = jasmine.createSpyObj('fakeRouter', ['navigate']);
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [
                {
                    provide: NotificationService,
                    useValue: fakeNotificationService,
                },
                {
                    provide: AuthService,
                    useValue: fakeAuthService,
                },
                {
                    provide: Router,
                    useValue: fakeRouter,
                },
                {
                    provide: ActivatedRoute,
                    useValue: {},
                },
            ],
            imports: [
                CommonModule,
                TuiInputModule,
                TuiInputPasswordModule,
                FormsModule,
                ReactiveFormsModule,
                TuiButtonModule,
                RouterModule,
                TuiIslandModule,
                TuiSvgModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        component.loginForm.setValue({
            password: 'password',
            username: 'username',
        });

        fixture.detectChanges();
    });

    it('should show succes notification if user login', () => {
        fakeAuthService.loginUser.and.returnValue(of(mockUser));
        const btn = findEl(fixture, 'login-btn');
        clickManyTimes(1, btn, fixture);

        expect(fakeNotificationService.showLoginSuccess).toHaveBeenCalled();
    });

    it('should navigate if user login', () => {
        fakeAuthService.loginUser.and.returnValue(of(mockUser));
        const btn = findEl(fixture, 'login-btn');
        clickManyTimes(1, btn, fixture);

        expect(fakeRouter.navigate).toHaveBeenCalled();
    });

    it('should show error notification if user login', () => {
        fakeAuthService.loginUser.and.returnValue(throwError('error'));
        const btn = findEl(fixture, 'login-btn');
        clickManyTimes(1, btn, fixture);

        expect(fakeNotificationService.showErrorMessage).toHaveBeenCalled();
    });
});
