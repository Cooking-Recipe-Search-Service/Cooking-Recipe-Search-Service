import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { take } from 'rxjs/operators';
import { mockRecipe } from 'src/app/recipes/recipes-page/recipes-module-mocks.mock';
import { clickManyTimes, findEl } from 'src/app/shared/helpers/test-helpers';
import { Base64ImageConvertModule } from 'src/app/shared/modules/base64-image-convert/base64-image-convert.module';

import { FavoritsPreviewCardComponent } from './favorits-preview-card.component';

describe('FavoritsPreviewCardComponent', () => {
    let component: FavoritsPreviewCardComponent;
    let fixture: ComponentFixture<FavoritsPreviewCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FavoritsPreviewCardComponent],
            imports: [
                CommonModule,
                TuiIslandModule,
                Base64ImageConvertModule,
                TuiButtonModule,
                RouterModule,
            ],
            providers: [
                {
                    provide: Router,
                    useValue: {},
                },
                {
                    provide: ActivatedRoute,
                    useValue: {},
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FavoritsPreviewCardComponent);
        component = fixture.componentInstance;
        component.recipes = [mockRecipe];
        fixture.detectChanges();
    });

    it('should recipes if exist', () => {
        const el = findEl(fixture, 'recipes');
        expect(el).toBeTruthy();
    });

    it('should display empty case if no recipes', () => {
        fixture = TestBed.createComponent(FavoritsPreviewCardComponent);
        component = fixture.componentInstance;
        component.recipes = [];
        fixture.detectChanges();

        const el = findEl(fixture, 'no-recipes');

        expect(el).toBeTruthy();
    });

    it('should navigate to favorits recipes tab', () => {
        let navigate = 0;
        component.navigate
            .pipe(take(1))
            .subscribe((value) => (navigate = value));

        const btn = findEl(fixture, 'navigate');
        clickManyTimes(1, btn, fixture);
        expect(navigate).toEqual(1);
    });
});
