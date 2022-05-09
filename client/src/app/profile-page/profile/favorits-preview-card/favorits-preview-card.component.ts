import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { AuthService } from 'src/app/shared/services/api/auth.service';

@Component({
    selector: 'app-favorits-preview-card',
    templateUrl: './favorits-preview-card.component.html',
    styleUrls: ['./favorits-preview-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPreviewCardComponent {
    @Output() navigate: EventEmitter<null> = new EventEmitter();

    recipes$ = this.authService.getFavorits();

    constructor(private readonly authService: AuthService) {}

    nanigateToFavorits():void {
        this.navigate.emit();
    }
}
