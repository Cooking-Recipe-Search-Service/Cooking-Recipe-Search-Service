import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core/components';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { IngredientModule } from '@app/shared/components';
import { clickManyTimes, findEl } from '@app/shared/test-helpers';

import { IngredientsComponent } from './ingredients.component';
import { mockIngredientsGenerator } from '@app/shared/test-helpers';

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
        component.computedIngredients = [
            mockIngredientsGenerator(inregientValue),
        ];
        component.initialIngredients = [
            mockIngredientsGenerator(inregientValue),
        ];
        fixture.detectChanges();
    }
    describe('should decrement', () => {
        it('should call decrement', () => {
            reinitIngredients(3, 3);
            spyOn(component, 'decrement');
            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.decrement).toHaveBeenCalledTimes(1);
        });

        it('should decrement portion', () => {
            reinitIngredients(3, 3);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedPortion).toEqual(2);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(3, 3);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(2);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(3, 300);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(200);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(2, 300);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(150);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(1, 300);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(300);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(2, 3);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(1.5);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(2, 0);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(0);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(3, 10);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(1, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(6.6);
        });

        it('should decrement ingredients value', () => {
            reinitIngredients(5, 333);

            fixture.detectChanges();
            const btn = findEl(fixture, 'decrement');
            clickManyTimes(6, btn, fixture);

            expect(component.computedIngredients[0].value).toEqual(66.6);
        });
    });

    describe('should increment', () => {
        it('should call increment', () => {
            reinitIngredients(3, 3);
            spyOn(component, 'increment');
            fixture.detectChanges();
            const btn = findEl(fixture, 'increment');
            clickManyTimes(1, btn, fixture);

            expect(component.increment).toHaveBeenCalledTimes(1);
        });

        it('should increment portion', () => {
            reinitIngredients(3, 3);

            fixture.detectChanges();
            const btn = findEl(fixture, 'increment');
            clickManyTimes(1, btn, fixture);

            expect(component.computedPortion).toEqual(4);
        });

        it('should increment portion', () => {
            reinitIngredients(3, 33);

            fixture.detectChanges();
            const btn = findEl(fixture, 'increment');
            clickManyTimes(5, btn, fixture);
            expect(component.computedIngredients[0].value).toEqual(88);
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

            expect(component.computedIngredients[0].value).toEqual(10);
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

            expect(component.computedIngredients[0].value).toEqual(100);
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

            expect(component.computedIngredients[0].value).toEqual(150);
        });
    });
});
