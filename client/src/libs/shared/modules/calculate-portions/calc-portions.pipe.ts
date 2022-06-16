import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '@app/interfaces';
import { formatNumber } from '@taiga-ui/core';

const decimalLimit = 1;
const decimalSeparator = '.';

@Pipe({
    name: 'calcPortions',
})
export class CalcPortionsPipe implements PipeTransform {
    transform(
        ingredients: readonly Ingredient[],
        portion: number,
        initialPortion: number,
    ): readonly Ingredient[] {
        return ingredients.map((ingredient) => {
            return {
                ...ingredient,
                value: +formatNumber(
                    (ingredient.value / initialPortion) * portion,
                    decimalLimit,
                    decimalSeparator,
                ),
            };
        });
    }
}
