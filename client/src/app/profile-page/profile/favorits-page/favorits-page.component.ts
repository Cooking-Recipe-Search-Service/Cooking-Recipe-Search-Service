import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/libs/interfaces';

@Component({
    selector: 'app-favorits-page',
    templateUrl: './favorits-page.component.html',
    styleUrls: ['./favorits-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPageComponent {
    @Input() recipes$!: Observable<readonly Recipe[]>;
}
