import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewChild,
} from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '@app/shared/services';
import { LocalStorageRecipesService } from '@app/shared/services';
import { NotificationService } from '@app/shared/services';
import { Recipe } from '@app/interfaces';

@Component({
    selector: 'app-recipe-preview',
    templateUrl: './recipe-preview.component.html',
    styleUrls: ['./recipe-preview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class RecipePreviewComponent {
    @Input() set recipe(recipe: Recipe) {
        this.isInStorage$ = this.localStorageRecipes.isInStorage(
            String(recipe.id),
        );
        this.currentRecipe = recipe;
    }

    @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;

    open = false;

    currentRecipe!: Recipe;

    isInStorage$: Observable<boolean> = of(true);

    constructor(
        private readonly notificationService: NotificationService,
        private readonly localStorageRecipes: LocalStorageRecipesService,
        private readonly authService: AuthService,
    ) {}

    onClick(): void {
        this.open = false;

        if (this.component && this.component.nativeFocusableElement) {
            this.component.nativeFocusableElement.focus();
        }
    }

    addToFavorites(recipe: Recipe): void {
        this.authService.addToFavorites(recipe).subscribe(
            (_) => {
                this.notificationService.showSuccesAddRecipe();
                this.localStorageRecipes.addRecipe(recipe);
            },
            (_) => this.notificationService.showErrorMessage(),
        );
    }

    removeFromFavorites(recipe: Recipe): void {
        this.authService.removeFromFavorites(recipe).subscribe(
            (_) => {
                this.notificationService.showSuccessRemoveRecipe();
                this.localStorageRecipes.removeRecipe(recipe);
            },
            (_) => this.notificationService.showErrorMessage(),
        );
    }
}
