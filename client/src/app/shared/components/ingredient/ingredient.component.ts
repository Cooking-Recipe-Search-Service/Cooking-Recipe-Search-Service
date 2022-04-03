import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ingredient } from 'src/libs/interfaces/shared/ingredient';

@Component({
    selector: 'app-ingredient',
    templateUrl: './ingredient.component.html',
    styleUrls: ['./ingredient.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientComponent {
    @Input() ingredient!: Ingredient;
}
