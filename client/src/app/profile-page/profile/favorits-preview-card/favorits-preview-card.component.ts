import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-favorits-preview-card',
    templateUrl: './favorits-preview-card.component.html',
    styleUrls: ['./favorits-preview-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPreviewCardComponent {}
