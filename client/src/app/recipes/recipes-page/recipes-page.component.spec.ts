import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { findEl, mockRecipe } from '@app/shared/test-helpers';
import { of } from 'rxjs';
import { RecipesPageComponent } from './recipes-page.component';

describe('RecipesPageComponent', () => {
    let component: RecipesPageComponent;
    let fixture: ComponentFixture<RecipesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RecipesPageComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipesPageComponent);
        component = fixture.componentInstance;
        component.searchedRecipes$ = of([]);
        fixture.detectChanges();
    });

    it('should display empty if no recipes was found', () => {
        component.searchedRecipes$ = of([]);
        fixture.detectChanges();
        const empty = findEl(fixture, 'empty');
        expect(empty).toBeTruthy();
    });

    it('should display recipes if exist', () => {
        component.searchedRecipes$ = of([mockRecipe]);
        fixture.detectChanges();
        const recipes = findEl(fixture, 'recipes');
        expect(recipes).toBeTruthy();
    });
});
