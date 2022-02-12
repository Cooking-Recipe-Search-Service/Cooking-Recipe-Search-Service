import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-full-recipe',
    templateUrl: './full-recipe.component.html',
    styleUrls: ['./full-recipe.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullRecipeComponent {}
