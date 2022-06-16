import { Ingredient } from '@app/interfaces';
import { mockIngredientsGenerator } from '@app/shared/test-helpers';
import { CalcPortionsPipe } from './calc-portions.pipe';

describe('CalcProtionsPipe', () => {
    let pipe: CalcPortionsPipe;
    let ingredients: readonly Ingredient[];
    let portion: number;
    let newPortion: number;

    beforeEach(() => {
        pipe = new CalcPortionsPipe();
    });

    function reinitIngredients(
        ingredientPortion: number,
        inregientValue: number,
        delta: number,
    ) {
        ingredients = [mockIngredientsGenerator(inregientValue)];
        portion = ingredientPortion;
        newPortion = portion + delta;
    }

    describe('should increment()', () => {
        it('should recalc ingredients when increment', () => {
            reinitIngredients(3, 3, 1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(4);
        });

        it('should recalc ingredients when increment', () => {
            reinitIngredients(3, 3, 1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(4);
        });

        it('should recalc ingredients when increment', () => {
            reinitIngredients(3, 3, 1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(4);
        });

        it('should recalc ingredients when increment', () => {
            reinitIngredients(3, 33, 1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(44);
        });
    });

    describe('should decrement()', () => {
        it('should recalc ingredients', () => {
            reinitIngredients(3, 3, -1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(2);
        });

        it('should recalc ingredients', () => {
            reinitIngredients(3, 300, -1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(200);
        });

        it('should recalc ingredients', () => {
            reinitIngredients(2, 300, -1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(150);
        });

        it('should recalc ingredients', () => {
            reinitIngredients(2, 3, -1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(1.5);
        });

        it('should recalc ingredients', () => {
            reinitIngredients(3, 10, -1);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(6.6);
        });

        it('should recalc ingredients', () => {
            reinitIngredients(5, 333, -4);
            const newIngredients = pipe.transform(
                ingredients,
                newPortion,
                portion,
            );
            expect(newIngredients[0].value).toEqual(66.6);
        });
    });
});
