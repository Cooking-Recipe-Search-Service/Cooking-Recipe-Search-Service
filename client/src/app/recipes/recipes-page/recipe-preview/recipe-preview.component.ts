import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewChild,
} from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { LocalStorageUserService } from 'src/app/shared/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/shared/services/notifications/notification.service';
import { Recipe } from 'src/libs/interfaces';

@Component({
    selector: 'app-recipe-preview',
    templateUrl: './recipe-preview.component.html',
    styleUrls: ['./recipe-preview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class RecipePreviewComponent {
    @Input() recipe!: Recipe;

    @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;

    open = false;

    user$: Observable<string | null> = this.localStirage.getToken();

    constructor(
        private localStirage: LocalStorageUserService,
        private readonly destroy$: TuiDestroyService,
        private readonly notificationService: NotificationService,
    ) {}

    onClick(): void {
        this.open = false;

        if (this.component && this.component.nativeFocusableElement) {
            this.component.nativeFocusableElement.focus();
        }
    }

    addToFavorits(recipe: Recipe, user: string | null): void {
        if (!user) {
            this.notificationService.showNeedLoginNotification();
            return;
        }
    }
}
