import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import {
    TuiCarouselModule,
    TuiIslandModule,
    TuiLazyLoadingModule,
} from '@taiga-ui/kit';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import {
    clickManyTimes,
    findEl,
    findElByClass,
    getTextByClass,
} from 'src/app/shared/helpers/test-helpers';
import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { mockCategories } from '../recipes-module-mocks.mock';

import { DefaultRecipesComponent } from './default-recipes.component';

describe('DefaultRecipesComponent', () => {
    let component: DefaultRecipesComponent;
    let fixture: ComponentFixture<DefaultRecipesComponent>;
    let recipesService: any;
    beforeEach(async () => {
        recipesService = jasmine.createSpyObj('recipesService', [
            'getCategories',
        ]);
        recipesService.getCategories.and.returnValue(of(mockCategories));

        await TestBed.configureTestingModule({
            declarations: [DefaultRecipesComponent],
            providers: [
                { provide: RecipesApiService, useValue: recipesService },
            ],
            imports: [
                CommonModule,
                BrowserModule,
                TuiIslandModule,
                TuiSvgModule,
                TuiLazyLoadingModule,
                TuiButtonModule,
                TuiCarouselModule,
                FormsModule,
                ReactiveFormsModule,
                TuiCarouselModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultRecipesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display categories', () => {
        const categories = [
            getTextByClass(fixture, '.category-0').trim(),
            getTextByClass(fixture, '.category-1').trim(),
        ];

        expect(categories.sort()).toEqual(['one', 'two']);
    });

    it('should mark active first btn', () => {
        expect(component.isActive(0)).toBe('custom');
    });

    it('should change active category on click', () => {
        spyOn(component, 'loadCategory');
        const btn = findElByClass(fixture, '.category-1');
        clickManyTimes(1, btn, fixture);

        expect(component.loadCategory).toHaveBeenCalled();
        // expect(component.isActive(1)).toBe('custom');
    });

    it('emit category', () => {
        let newCategory = '';
        component.clickedCategory
            .pipe(take(1))
            .subscribe((value) => (newCategory = value));
        const btn = findElByClass(fixture, '.category-1');
        clickManyTimes(1, btn, fixture);
        const textBtn = getTextByClass(fixture, '.category-1').trim();
        expect(newCategory).toBe(textBtn);
    });

    describe('navigate btn', () => {
        it('should navigate on click', () => {
            const btn = findEl(fixture, 'navigate');
            clickManyTimes(1, btn, fixture);

            expect(component.index).toBe(1);
        });
        it('should navigate on click two times', () => {
            const btn = findEl(fixture, 'navigate');
            clickManyTimes(2, btn, fixture);

            expect(component.index).toBe(0);
        });
    });
});
