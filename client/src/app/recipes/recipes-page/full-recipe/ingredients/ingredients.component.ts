import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { formatNumber } from '@taiga-ui/core';
import { Ingredient } from 'src/libs/interfaces';

const decimalLimit = 1;
const decimalSeparator = '.';
@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsComponent {
    @Input() set portion(portion: number) {
        this.initialPortion = portion;
        this.computedPortion = portion;
    }

    @Input() set ingredients(ingredients: readonly Ingredient[]) {
        this.initialIngredients = [...ingredients];
        this.computedIngredients = [...ingredients];
    }

    initialPortion = 0;

    computedPortion = 0;

    initialIngredients: readonly Ingredient[] = [];

    computedIngredients: readonly Ingredient[] = [];

    decrement(): void {
        if (this.computedPortion === 1) return;
        this.computedPortion -= 1;
        this.computedIngredients = [
            ...this.initialIngredients.map((ingredient) => {
                return {
                    ...ingredient,
                    value: +formatNumber(
                        (ingredient.value / this.initialPortion) *
                            this.computedPortion,
                        decimalLimit,
                        decimalSeparator,
                    ),
                };
            }),
        ];
    }

    increment(): void {
        this.computedPortion += 1;
        this.computedIngredients = [
            ...this.initialIngredients.map((ingredient) => {
                return {
                    ...ingredient,
                    value: +formatNumber(
                        (ingredient.value / this.initialPortion) *
                            this.computedPortion,
                        decimalLimit,
                        decimalSeparator,
                    ),
                };
            }),
        ];
    }
}
