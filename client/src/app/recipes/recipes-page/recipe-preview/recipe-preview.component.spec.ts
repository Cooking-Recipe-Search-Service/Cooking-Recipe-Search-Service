import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiGroupModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiBadgeModule,
    TuiIslandModule,
    TuiLineClampModule,
} from '@taiga-ui/kit';

import { Base64ImageConvertModule } from '@app/shared/modules';
import { DeclensionsPipeModule } from '@app/shared/modules';
import { RecipeTagsPipeModule } from '@app/shared/modules';
import { RecipePreviewComponent } from './recipe-preview.component';
import { NotificationService } from '@app/shared/services';
import { LocalStorageRecipesService } from '@app/shared/services';
import { AuthService } from '@app/shared/services';
import { of, throwError } from 'rxjs';
import { clickManyTimes, expectText, findEl } from '@app/shared/test-helpers';
import { mockRecipe } from '@app/shared/test-helpers';

describe('RecipePreviewComponent', () => {
    let component: RecipePreviewComponent;
    let fixture: ComponentFixture<RecipePreviewComponent>;

    let fakeNotificationService: any;
    let fakeLocalStorageRecipes: any;
    let fakeAuthService: any;
    beforeEach(async () => {
        fakeNotificationService = jasmine.createSpyObj(
            'fakeNotificationService',
            [
                'showSuccessRemoveRecipe',
                'showErrorMessage',
                'showSuccesAddRecipe',
            ],
        );
        fakeAuthService = jasmine.createSpyObj('fakeAuthService', [
            'addToFavorites',
            'removeFromFavorites',
        ]);
        fakeLocalStorageRecipes = jasmine.createSpyObj(
            'fakeLocalStorageRecipes',
            ['addRecipe', 'isInStorage', 'removeRecipe'],
        );
        await TestBed.configureTestingModule({
            declarations: [RecipePreviewComponent],
            imports: [
                CommonModule,
                TuiIslandModule,
                RecipeTagsPipeModule,
                TuiBadgeModule,
                TuiSvgModule,
                TuiHostedDropdownModule,
                TuiDataListModule,
                TuiButtonModule,
                // IngredientModule,
                TuiGroupModule,
                DeclensionsPipeModule,
                TuiLineClampModule,
                Base64ImageConvertModule,
                TuiHintModule,
                TuiLetModule,
            ],

            providers: [
                {
                    provide: NotificationService,
                    useValue: fakeNotificationService,
                },
                {
                    provide: LocalStorageRecipesService,
                    useValue: fakeLocalStorageRecipes,
                },
                {
                    provide: AuthService,
                    useValue: fakeAuthService,
                },
            ],
        }).compileComponents();
    });

    function reinit(isInStorage: boolean) {
        fixture = TestBed.createComponent(RecipePreviewComponent);
        component = fixture.componentInstance;
        component.currentRecipe = mockRecipe;
        component.isInStorage$ = of(isInStorage);
        fixture.detectChanges();
    }

    describe('recipe in storage', () => {
        it('addToFavorites() called', () => {
            reinit(false);

            spyOn(component, 'removeFromFavorites');

            const btn = findEl(fixture, 'is-storage-btn');

            clickManyTimes(1, btn, fixture);

            expect(component.removeFromFavorites).toHaveBeenCalled();
        });

        it('removeFromFavorites() called', () => {
            reinit(true);

            spyOn(component, 'addToFavorites');

            const btn = findEl(fixture, 'not-storage-btn');

            clickManyTimes(1, btn, fixture);

            expect(component.addToFavorites).toHaveBeenCalled();
        });

        it('when click on btn send request to server', () => {
            reinit(true);

            const btn = findEl(fixture, 'not-storage-btn');

            clickManyTimes(1, btn, fixture);
            expect(fakeAuthService.addToFavorites).toHaveBeenCalled();
        });

        it('when click on btn send request to server', () => {
            reinit(false);

            const btn = findEl(fixture, 'is-storage-btn');

            clickManyTimes(1, btn, fixture);
            expect(fakeAuthService.removeFromFavorites).toHaveBeenCalled();
        });

        it('when click addToFavorites on btn send request to server is succes show notification', () => {
            reinit(true);
            fakeAuthService.addToFavorites.and.returnValue(of(mockRecipe));
            const btn = findEl(fixture, 'not-storage-btn');

            clickManyTimes(1, btn, fixture);

            fixture.detectChanges();

            expect(
                fakeNotificationService.showSuccesAddRecipe,
            ).toHaveBeenCalled();
        });

        it('when click  removeFromFavorites on btn send request to server is succes show succes notification', () => {
            reinit(false);
            fakeAuthService.removeFromFavorites.and.returnValue(of(mockRecipe));
            const btn = findEl(fixture, 'is-storage-btn');

            clickManyTimes(1, btn, fixture);

            fixture.detectChanges();

            expect(
                fakeNotificationService.showSuccessRemoveRecipe,
            ).toHaveBeenCalled();
        });

        it('when click  removeFromFavorites on btn send request to server is error show error notification', () => {
            reinit(false);
            fakeAuthService.removeFromFavorites.and.returnValue(
                throwError('error'),
            );

            const btn = findEl(fixture, 'is-storage-btn');

            clickManyTimes(1, btn, fixture);

            fixture.detectChanges();

            expect(fakeNotificationService.showErrorMessage).toHaveBeenCalled();
        });

        it('when click  addToFavorites on btn send request to server is error show error notification', () => {
            reinit(true);
            fakeAuthService.addToFavorites.and.returnValue(throwError('error'));

            const btn = findEl(fixture, 'not-storage-btn');

            clickManyTimes(1, btn, fixture);

            fixture.detectChanges();

            expect(fakeNotificationService.showErrorMessage).toHaveBeenCalled();
        });

        it('when click  addToFavorites on btn send request to server is error show error notification', () => {
            reinit(true);
            fakeAuthService.addToFavorites.and.returnValue(throwError('error'));

            const btn = findEl(fixture, 'not-storage-btn');

            clickManyTimes(1, btn, fixture);

            fixture.detectChanges();

            expect(fakeNotificationService.showErrorMessage).toHaveBeenCalled();
        });

        it('when click  addToFavorites on btn send request to server is success add to local storage', () => {
            reinit(true);
            fakeAuthService.addToFavorites.and.returnValue(of(mockRecipe));

            const btn = findEl(fixture, 'not-storage-btn');

            clickManyTimes(1, btn, fixture);

            fixture.detectChanges();

            expect(fakeLocalStorageRecipes.addRecipe).toHaveBeenCalled();
        });

        it('when click  removeFromFavorites on btn send request to server is success remove to local storage', () => {
            reinit(false);
            fakeAuthService.removeFromFavorites.and.returnValue(of(mockRecipe));

            const btn = findEl(fixture, 'is-storage-btn');

            clickManyTimes(1, btn, fixture);

            fixture.detectChanges();

            expect(fakeLocalStorageRecipes.removeRecipe).toHaveBeenCalled();
        });
    });

    it('should display recipe', () => {
        reinit(true);
        expectText(fixture, 'callories', '572 ????????');
        expectText(fixture, 'name', '???????????????? ?????????????????? ?? ??????????????');
        expectText(fixture, 'ingredients', '8 ????????????????????????');
    });
});
