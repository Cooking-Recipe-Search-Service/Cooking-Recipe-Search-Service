import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {}
