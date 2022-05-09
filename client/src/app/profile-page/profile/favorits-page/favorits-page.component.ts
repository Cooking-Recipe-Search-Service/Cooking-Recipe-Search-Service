import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-favorits-page',
    templateUrl: './favorits-page.component.html',
    styleUrls: ['./favorits-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPageComponent {}
