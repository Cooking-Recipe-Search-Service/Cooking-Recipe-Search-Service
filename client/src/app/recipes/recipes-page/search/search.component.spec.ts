import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '@app/interfaces';
import { SelectWithSearchModule } from '@app/shared/components';
import { RecipesApiService } from '@app/shared/services';
import {
    clickManyTimes,
    findEl,
    mockCategories,
    mockCountries,
    mockIngredients,
    mockRecipe,
} from '@app/shared/test-helpers';
import {
    TuiDestroyService,
    TuiLetModule,
    TuiMapperPipeModule,
} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiInputModule,
} from '@taiga-ui/kit';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { RecipePreviewModule } from '../recipe-preview/recipe-preview.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let recipesService: any;
    beforeEach(async () => {
        recipesService = jasmine.createSpyObj('recipesService', [
            'searchRecipe',
            'getCategories',
            'getCountries',
            'getIngredients',
            'getDefaultRecipes',
        ]);
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [
                TuiLetModule,
                CommonModule,
                TuiInputModule,
                TuiButtonModule,
                TuiTextfieldControllerModule,
                FormsModule,
                ReactiveFormsModule,
                TuiHostedDropdownModule,
                SelectWithSearchModule,
                TuiSvgModule,
                TuiLetModule,
                TuiMapperPipeModule,
                TuiComboBoxModule,
                TuiDataListWrapperModule,
                TuiFilterByInputPipeModule,
                TuiHostedDropdownModule,
                RecipePreviewModule,
                TuiDataListModule,
            ],
            providers: [
                {
                    provide: RecipesApiService,
                    useValue: recipesService,
                },
                {
                    provide: TuiDestroyService,
                    useValue: new Subject(),
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        recipesService.searchRecipe.and.returnValue(of([mockRecipe]));
        recipesService.getCategories.and.returnValue(of(mockCategories));
        recipesService.getCountries.and.returnValue(of(mockCountries));
        recipesService.getIngredients.and.returnValue(of(mockIngredients));
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should NOT search on empty string', () => {
        const searchedRecipe$$ = new BehaviorSubject<readonly Recipe[]>([]);

        component.searchedRecipes
            .pipe(
                switchMap((value) => value),
                tap((value) => searchedRecipe$$.next(value)),
            )
            .subscribe();
        const el = findEl(fixture, 'input').nativeElement;
        el.value = '';
        el.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(searchedRecipe$$.getValue().length).toBe(0);
    });

    it('should NOT search on empty string length < 3', () => {
        const searchedRecipe$$ = new BehaviorSubject<readonly Recipe[]>([]);

        component.searchedRecipes
            .pipe(
                switchMap((value) => value),
                tap((value) => searchedRecipe$$.next(value)),
            )
            .subscribe();
        const el = findEl(fixture, 'input').nativeElement;
        el.value = '3';
        el.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(searchedRecipe$$.getValue().length).toBe(0);
    });

    it('should search with paramentrs', () => {
        component.searchForm.setValue({
            name: 'search',
            category: null,
            kitchen: null,
            preparationTime: null,
            excludeIngredients: [],
            includeIngredients: [],
        });

        const searchedRecipe$$ = new BehaviorSubject<readonly Recipe[]>([]);

        component.searchedRecipes
            .pipe(
                switchMap((value) => value),
                tap((value) => searchedRecipe$$.next(value)),
            )
            .subscribe();
        const searchBtn = findEl(fixture, 'search-btn');
        clickManyTimes(1, searchBtn, fixture);

        fixture.detectChanges();
        expect(recipesService.searchRecipe).toHaveBeenCalled();
        expect(searchedRecipe$$.getValue().length).toBe(1);
    });

    it('should display all recipes if search query empty', () => {
        component.searchForm.setValue({
            name: '',
            category: null,
            kitchen: null,
            preparationTime: null,
            excludeIngredients: [],
            includeIngredients: [],
        });

        const searchBtn = findEl(fixture, 'search-btn');
        clickManyTimes(1, searchBtn, fixture);

        fixture.detectChanges();
        expect(recipesService.getDefaultRecipes).toHaveBeenCalled();
    });
});
