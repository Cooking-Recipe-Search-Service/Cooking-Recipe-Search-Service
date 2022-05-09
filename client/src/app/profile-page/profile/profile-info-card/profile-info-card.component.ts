import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
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
    token$: Observable<string | null> = this.localStorage.getToken();

    user$: Observable<Profile | null> = this.token$.pipe(
        filter((token) => token !== null),
        switchMap((token) => this.authService.getUser(token)),
    );

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
