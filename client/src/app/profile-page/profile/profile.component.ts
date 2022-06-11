import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageRecipesService } from '@app/shared/services';
import { LocalStorageUserService } from '@app/shared/services';
import { Profile, Recipe } from '@app/interfaces';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    activeItemIndex = 0;

    user$: Observable<Profile | null> = this.localStorageUser.getUser();

    recipes$: Observable<readonly Recipe[]> =
        this.localStorageRecipes.getRecipes();

    constructor(
        private readonly localStorageUser: LocalStorageUserService,
        private readonly localStorageRecipes: LocalStorageRecipesService,
    ) {}

    navigate(index: number): void {
        this.activeItemIndex = index;
    }
}
