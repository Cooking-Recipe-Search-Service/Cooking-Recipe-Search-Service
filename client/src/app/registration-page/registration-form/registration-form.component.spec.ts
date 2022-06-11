import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TuiButtonModule, TuiErrorModule, TuiSvgModule } from '@taiga-ui/core';
import {
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiIslandModule,
} from '@taiga-ui/kit';
import { of } from 'rxjs';
import { mockUserWithResipes } from '@app/shared/test-helpers';
import { clickManyTimes, findEl } from '@app/shared/test-helpers';
import { AuthService } from '@app/shared/services';
import { NotificationService } from '@app/shared/services';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
    let component: RegistrationFormComponent;
    let fixture: ComponentFixture<RegistrationFormComponent>;
    let fakeNotificationService: any;
    let fakeAuthService: any;
    let fakeRouter: any;

    beforeEach(async () => {
        fakeNotificationService = jasmine.createSpyObj(
            'fakeNotificationService',
            ['showRegisterSuccess', 'showErrorMessage'],
        );
        fakeAuthService = jasmine.createSpyObj('fakeAuthService', [
            'registerUser',
        ]);
        fakeRouter = jasmine.createSpyObj('fakeRouter', ['navigate']);
        await TestBed.configureTestingModule({
            declarations: [RegistrationFormComponent],
            imports: [
                CommonModule,
                TuiInputModule,
                TuiInputPasswordModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                TuiButtonModule,
                HttpClientModule,
                TuiFieldErrorPipeModule,
                TuiErrorModule,
                TuiSvgModule,
                TuiIslandModule,
            ],
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
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationFormComponent);
        component = fixture.componentInstance;
        // fakeAuthService.registerUser.and.returnValue(of(mockUser))
        component.registrationForm.setValue({
            password: 'password',
            username: 'username',
            email: 'tdkonina@mail.ru',
        });
        fixture.detectChanges();
    });

    it('should show notification in registration success ', () => {
        fakeAuthService.registerUser.and.returnValue(of(mockUserWithResipes));
        const btn = findEl(fixture, 'register-btn');
        clickManyTimes(1, btn, fixture);

        expect(fakeNotificationService.showRegisterSuccess).toHaveBeenCalled();
    });

    it('should navigate in registration success ', () => {
        fakeAuthService.registerUser.and.returnValue(of(mockUserWithResipes));
        const btn = findEl(fixture, 'register-btn');
        clickManyTimes(1, btn, fixture);

        expect(fakeRouter.navigate).toHaveBeenCalled();
    });

    it('should show eroor if email invalid', () => {
        component.registrationForm.setValue({
            password: 'password',
            username: 'username',
            email: 'td',
        });
        fixture.detectChanges();

        const el = findEl(fixture, 'invalid-email');
        expect(el).toBeTruthy();
    });

    it('should show error if username invalid', () => {
        component.registrationForm.setValue({
            password: 'password',
            username: 'us',
            email: 'tdkonina@mail.ru',
        });
        fixture.detectChanges();

        const el = findEl(fixture, 'invalid-username');
        expect(el).toBeTruthy();
    });
});
