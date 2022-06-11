import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageRecipesService } from 'src/app/shared/services/local-storage/local-storage-recipes.service';
import { LocalStorageUserService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Profile, Recipe } from 'src/libs/interfaces';

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
