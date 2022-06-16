import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Recipe } from '@app/interfaces';

@Component({
    selector: 'app-favorits-page',
    templateUrl: './favorits-page.component.html',
    styleUrls: ['./favorits-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPageComponent {
    @Input() recipes!: readonly Recipe[];
}
