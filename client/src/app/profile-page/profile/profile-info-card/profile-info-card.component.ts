import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Profile } from 'src/libs/interfaces';

@Component({
    selector: 'app-profile-info-card',
    templateUrl: './profile-info-card.component.html',
    styleUrls: ['./profile-info-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoCardComponent {
    user$: Observable<Profile | null> = this.authService.getUser();

    constructor(
        private readonly localStorage: LocalStorageService,
        private readonly recipiesApi: RecipesApiService,
        private router: Router,
        private readonly authService: AuthService,
    ) {}

    logout(): void {
        //
    }
}
