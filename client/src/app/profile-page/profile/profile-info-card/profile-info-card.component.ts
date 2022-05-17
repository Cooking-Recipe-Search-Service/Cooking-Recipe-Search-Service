import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageRecipesService } from 'src/app/shared/services/local-storage/local-storage-recipes.service';
import { LocalStorageUserService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Profile } from 'src/libs/interfaces';

@Component({
    selector: 'app-profile-info-card',
    templateUrl: './profile-info-card.component.html',
    styleUrls: ['./profile-info-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoCardComponent {
    @Input() user!: Profile;

    constructor(
        private readonly localStorage: LocalStorageUserService,
        private readonly localStorageRecipes: LocalStorageRecipesService,
        private router: Router,
    ) {}

    logout(): void {
        this.localStorage.logoutUser();
        this.localStorageRecipes.removeRecipes();
        this.router.navigate(['/recipes']);
    }
}
