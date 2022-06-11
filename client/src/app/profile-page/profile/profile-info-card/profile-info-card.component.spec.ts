import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import {
    clickManyTimes,
    expectText,
    findEl,
} from '@app/shared/test-helpers';
import { LocalStorageRecipesService } from '@app/shared/services';
import { LocalStorageUserService } from '@app/shared/services';

import { ProfileInfoCardComponent } from './profile-info-card.component';
import { mockUser } from '@app/shared/test-helpers';

describe('ProfileInfoCardComponent', () => {
    let component: ProfileInfoCardComponent;
    let fixture: ComponentFixture<ProfileInfoCardComponent>;
    let fakeLocalReipesStorage: any;
    let fakeLocalUserStorage: any;
    let fakeRouter: any;
    beforeEach(async () => {
        fakeLocalReipesStorage = jasmine.createSpyObj(
            'fakeLocalReipesStorage',
            ['removeRecipes'],
        );
        fakeLocalUserStorage = jasmine.createSpyObj('fakeLocalUserStorage', [
            'logoutUser',
        ]);

        fakeRouter = jasmine.createSpyObj('fakeRouter', ['navigate']);
        await TestBed.configureTestingModule({
            declarations: [ProfileInfoCardComponent],
            imports: [
                CommonModule,
                TuiIslandModule,
                TuiButtonModule,
                TuiSvgModule,
            ],
            providers: [
                {
                    provide: LocalStorageUserService,
                    useValue: fakeLocalUserStorage,
                },
                {
                    provide: LocalStorageRecipesService,
                    useValue: fakeLocalReipesStorage,
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
        fixture = TestBed.createComponent(ProfileInfoCardComponent);
        component = fixture.componentInstance;
        component.user = mockUser;
        fixture.detectChanges();
    });

    it('should display user info', () => {
        expectText(fixture, 'username', 'username');
        expectText(fixture, 'email', 'email');
    });

    it('should navigate on logout', () => {
        const btn = findEl(fixture, 'logout-btn');
        clickManyTimes(1, btn, fixture);
        expect(fakeRouter.navigate).toHaveBeenCalled();
    });

    it('should clear storage', () => {
        const btn = findEl(fixture, 'logout-btn');
        clickManyTimes(1, btn, fixture);
        expect(fakeLocalReipesStorage.removeRecipes).toHaveBeenCalled();
        expect(fakeLocalUserStorage.logoutUser).toHaveBeenCalled();
    });
});
