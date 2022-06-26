import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ingredient } from '@app/interfaces';

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

    @Input() ingredients: readonly Ingredient[] = [];

    initialPortion = 0;

    computedPortion = 0;

    calcIngredients(delta: number): void {
        if (this.computedPortion === 1 && delta === -1) return;
        this.computedPortion += delta;
    }
}
