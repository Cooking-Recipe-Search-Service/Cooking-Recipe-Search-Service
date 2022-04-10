import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ingredient } from 'src/libs/interfaces/shared/ingredient';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsComponent {
    @Input() value!: number;

    @Input() set ingredients(ingredients: readonly Ingredient[]) {
        this.computedIngredients = [...ingredients];
    }

    computedIngredients: readonly Ingredient[] = [];

    decrement(): void {
        this.value -= 1;
        this.computedIngredients = [
            ...this.computedIngredients.map((ingredient) => {
                return {
                    ...ingredient,
                    value: (ingredient.value / (this.value + 1)) * this.value,
                };
            }),
        ];
    }

    increment(): void {
        this.value += 1;
        this.computedIngredients = [
            ...this.computedIngredients.map((ingredient) => {
                return {
                    ...ingredient,
                    value: (ingredient.value / (this.value - 1)) * this.value,
                };
            }),
        ];
    }
}
