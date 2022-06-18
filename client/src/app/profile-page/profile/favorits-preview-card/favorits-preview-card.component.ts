import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Recipe } from '@app/interfaces';
@Component({
    selector: 'app-favorits-preview-card',
    templateUrl: './favorits-preview-card.component.html',
    styleUrls: ['./favorits-preview-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPreviewCardComponent {
    @Output() navigate: EventEmitter<number> = new EventEmitter();

    @Input() recipes!: readonly Recipe[];

    nanigateToFavorits(): void {
        this.navigate.emit(1);
    }
}
