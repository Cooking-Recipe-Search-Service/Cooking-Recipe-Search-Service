import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { findEl } from '@app/shared/test-helpers';
import { LocalStorageRecipesService } from '@app/shared/services';
import { LocalStorageUserService } from '@app/shared/services';

import { NavbarComponent } from './navbar.component';
import { mockAdmin, mockUser } from '@app/shared/test-helpers';

describe('NavbarComponent', () => {
    let fixture: ComponentFixture<NavbarComponent>;
    let fakeLocalStorageUserService: any;
    let fakeLocalStorageRecipesService: any;
    let fakeLocation: any;
    let fakeRouter: any;

    beforeEach(async () => {
        fakeLocalStorageUserService = jasmine.createSpyObj(
            'fakeLocalStorageUserService',
            ['getUser'],
        );
        fakeLocalStorageRecipesService = jasmine.createSpyObj(
            'fakeLocalStorageRecipesService',
            ['removeRecipes'],
        );
        fakeRouter = jasmine.createSpyObj('fakeRouter', ['navigate']);
        fakeLocation = jasmine.createSpyObj('fakeLocation', ['path']);
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            providers: [
                {
                    provide: LocalStorageUserService,
                    useValue: fakeLocalStorageUserService,
                },
                {
                    provide: LocalStorageRecipesService,
                    useValue: fakeLocalStorageRecipesService,
                },
                {
                    provide: Router,
                    useValue: fakeRouter,
                },
                {
                    provide: Location,
                    useValue: fakeLocation,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fakeLocalStorageUserService.getUser.and.returnValue(of(mockUser));
        fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
    });

    it('should hide admin panel', () => {
        let adminPanelTab = undefined;
        try {
            adminPanelTab = findEl(fixture, 'admin-panel');
        } catch {
            adminPanelTab = undefined;
        }

        expect(adminPanelTab).toBeFalsy();
    });

    it('should show admin panel if admin', () => {
        fakeLocalStorageUserService.getUser.and.returnValue(of(mockAdmin));
        fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const adminPanelTab = findEl(fixture, 'admin-panel');
        expect(adminPanelTab).toBeTruthy();
    });

    it('should show profile info  if user thier', () => {
        fakeLocalStorageUserService.getUser.and.returnValue(of(mockUser));
        fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const adminPanelTab = findEl(fixture, 'user-tab');
        expect(adminPanelTab).toBeTruthy();
    });

    it('should show log in info  if not user thier', () => {
        fakeLocalStorageUserService.getUser.and.returnValue(of(null));
        fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const adminPanelTab = findEl(fixture, 'login');
        expect(adminPanelTab).toBeTruthy();
    });
});
