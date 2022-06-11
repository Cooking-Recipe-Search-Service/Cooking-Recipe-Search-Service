import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { mockRecipe } from 'src/app/recipes/recipes-page/recipes-module-mocks.mock';
import { findEl } from 'src/app/shared/helpers/test-helpers';

import { FavoritsPageComponent } from './favorits-page.component';

describe('FavoritsPageComponent', () => {
    let component: FavoritsPageComponent;
    let fixture: ComponentFixture<FavoritsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FavoritsPageComponent],
            imports: [CommonModule, TuiButtonModule],
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
        fixture = TestBed.createComponent(FavoritsPageComponent);
        component = fixture.componentInstance;
        component.recipes = [];
        fixture.detectChanges();
    });

    it('should display empty case if no recipes', () => {
        const el = findEl(fixture, 'no-recipes');

        expect(el).toBeTruthy();
    });

    it('should display recipes if exist', () => {
        fixture = TestBed.createComponent(FavoritsPageComponent);
        component = fixture.componentInstance;
        component.recipes = [mockRecipe];
        fixture.detectChanges();
        const el = findEl(fixture, 'recipes');
        expect(el).toBeTruthy();
    });
});
