import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ingredient } from 'src/libs/interfaces';
import { expectText } from '../../helpers/test-helpers';

import { IngredientComponent } from './ingredient.component';

const igredientMock: Ingredient = {
    name: 'name',
    measurementValue: 'гр',
    value: 3,
    energyValue: {
        calories: 0,
        carbs: 0,
        proteins: 0,
        fats: 0,
    },
};

describe('IngredientComponent', () => {
    let component: IngredientComponent;
    let fixture: ComponentFixture<IngredientComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IngredientComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IngredientComponent);
        component = fixture.componentInstance;
        component.ingredient = igredientMock;
        fixture.detectChanges();
    });

    it('should display ingregient', () => {
        expectText(fixture, 'ingredient', 'name');
        expectText(fixture, 'ingredient-value', '3 гр');
    });
});
