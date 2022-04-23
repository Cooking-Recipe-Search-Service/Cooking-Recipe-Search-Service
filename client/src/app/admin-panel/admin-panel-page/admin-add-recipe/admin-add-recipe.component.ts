import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-admin-add-recipe',
    templateUrl: './admin-add-recipe.component.html',
    styleUrls: ['./admin-add-recipe.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminAddRecipeComponent {}
