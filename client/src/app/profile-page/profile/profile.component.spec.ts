import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockUser } from '../profile/profile-info-card/user-mock';
import { LocalStorageRecipesService } from 'src/app/shared/services/local-storage/local-storage-recipes.service';
import { LocalStorageUserService } from 'src/app/shared/services/local-storage/local-storage.service';

import { ProfileComponent } from './profile.component';
import { clickManyTimes, findEl } from 'src/app/shared/helpers/test-helpers';
import { mockRecipe } from 'src/app/recipes/recipes-page/recipes-module-mocks.mock';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;
    let fakeLocalReipesStorage: any;
    let fakeLocalUserStorage: any;

    beforeEach(async () => {
        fakeLocalReipesStorage = jasmine.createSpyObj(
            'fakeLocalReipesStorage',
            ['getRecipes'],
        );
        fakeLocalUserStorage = jasmine.createSpyObj('fakeLocalUserStorage', [
            'getUser',
        ]);
        await TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [],
            providers: [
                {
                    provide: LocalStorageUserService,
                    useValue: fakeLocalUserStorage,
                },
                {
                    provide: LocalStorageRecipesService,
                    useValue: fakeLocalReipesStorage,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fakeLocalReipesStorage.getRecipes.and.returnValue(of([mockRecipe]));
        fakeLocalUserStorage.getUser.and.returnValue(of(mockUser));
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should be on main content', () => {
        const previewComp = findEl(fixture, 'preview');

        expect(component.activeItemIndex).toBe(0);
        expect(previewComp).toBeTruthy();
    });

    it('should navigate to another tab and display it', () => {
        const btn = findEl(fixture, 'favorits-btn');
        clickManyTimes(1, btn, fixture);
        const favoritsComp = findEl(fixture, 'favorits');

        expect(component.activeItemIndex).toBe(1);
        expect(favoritsComp).toBeTruthy();
    });

    it('should navigate to another tab and display it', () => {
        const favoritsBtn = findEl(fixture, 'favorits-btn');
        const mainBtn = findEl(fixture, 'main-btn');

        clickManyTimes(1, favoritsBtn, fixture);
        clickManyTimes(1, mainBtn, fixture);

        const previewComp = findEl(fixture, 'preview');

        expect(component.activeItemIndex).toBe(0);
        expect(previewComp).toBeTruthy();
    });
});
