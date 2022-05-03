import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

@Component({
    selector: 'app-profile-info-card',
    templateUrl: './profile-info-card.component.html',
    styleUrls: ['./profile-info-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoCardComponent {
    user$ = this.recipiesApi.getUser();

    constructor(
        private readonly localStorage: LocalStorageService,
        private readonly recipiesApi: RecipesApiService,
        private socialAuthService: SocialAuthService,
        private router: Router,
    ) {}

    logout(): void {
        this.socialAuthService
            .signOut()
            .then(() => this.router.navigate(['recipes']));
    }
}
