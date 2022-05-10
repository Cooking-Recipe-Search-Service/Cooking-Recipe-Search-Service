import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/libs/interfaces';
@Component({
    selector: 'app-favorits-preview-card',
    templateUrl: './favorits-preview-card.component.html',
    styleUrls: ['./favorits-preview-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPreviewCardComponent {
    @Output() navigate: EventEmitter<number> = new EventEmitter();

    @Input() recipes$!: Observable<readonly Recipe[]>;

    nanigateToFavorits(): void {
        this.navigate.emit(1);
    }
}
