import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-recipe-preview',
    templateUrl: './recipe-preview.component.html',
    styleUrls: ['./recipe-preview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipePreviewComponent {}
