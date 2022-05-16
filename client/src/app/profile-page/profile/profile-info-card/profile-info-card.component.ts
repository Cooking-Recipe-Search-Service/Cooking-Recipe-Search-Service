import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUserService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Profile, ProfileWithRecipes } from 'src/libs/interfaces';

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
        private router: Router,
    ) {}

    logout(): void {
        this.localStorage.logoutUser();

        this.router.navigate(['/recipes']);
    }
}
