import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core/components';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { IngredientModule } from '@app/shared/components';
import { clickManyTimes, findEl } from '@app/shared/test-helpers';

import { IngredientsComponent } from './ingredients.component';
import { mockIngredientsGenerator } from '@app/shared/test-helpers';
import {
    CalculatePortionsModule,
    DeclensionsPipeModule,
} from '@app/shared/modules';

describe('IngredientsComponent', () => {
    let component: IngredientsComponent;
    let fixture: ComponentFixture<IngredientsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IngredientsComponent],
            imports: [
                TuiInputModule,
                TuiIslandModule,
                TuiButtonModule,
                TuiTextfieldControllerModule,
                IngredientModule,
                DeclensionsPipeModule,
                CalculatePortionsModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IngredientsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    function reinitIngredients(portion: number, inregientValue: number) {
        fixture = TestBed.createComponent(IngredientsComponent);
        component = fixture.componentInstance;
        component.initialPortion = portion;
        component.computedPortion = portion;
        component.ingredients = [mockIngredientsGenerator(inregientValue)];
        fixture.detectChanges();
    }
    describe('should decrement', () => {
        it('should call decrement', () => {
            reinitIngredients(3, 3);
            spyOn(component, 'calcIngredients');
            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.calcIngredients).toHaveBeenCalledTimes(1);
        });

        it('should decrement portion', () => {
            reinitIngredients(3, 3);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedPortion).toEqual(2);
        });
    });

    describe('should increment', () => {
        it('should increment portion', () => {
            reinitIngredients(3, 3);

            fixture.detectChanges();
            const btn = findEl(fixture, 'increment');
            clickManyTimes(1, btn, fixture);

            expect(component.computedPortion).toEqual(4);
        });
    });

    describe('should increment and decrement more times', () => {
        it('should decrement ingredients value', () => {
            reinitIngredients(3, 10);

            fixture.detectChanges();
            const btnDecrement = findEl(fixture, 'decrement');
            btnDecrement.triggerEventHandler('click', null);

            fixture.detectChanges();
            const btnIncrement = findEl(fixture, 'increment');
            btnIncrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            expect(component.computedPortion).toEqual(3);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(2, 100);

            fixture.detectChanges();
            const btnDecrement = findEl(fixture, 'decrement');
            btnDecrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            fixture.detectChanges();
            btnDecrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            const btnIncrement = findEl(fixture, 'increment');
            btnIncrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            expect(component.computedPortion).toEqual(1);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(2, 100);

            fixture.detectChanges();
            const btnDecrement = findEl(fixture, 'decrement');
            btnDecrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            fixture.detectChanges();
            btnDecrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            const btnIncrement = findEl(fixture, 'increment');
            btnIncrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            btnIncrement.triggerEventHandler('click', null);

            fixture.detectChanges();

            expect(component.computedPortion).toEqual(1);
        });
    });
});
