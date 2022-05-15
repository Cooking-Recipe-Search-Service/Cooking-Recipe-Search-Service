import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { ProfileWithRecipes } from 'src/libs/interfaces';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    private token$ = this.localStorage.getToken();

    activeItemIndex = 0;

    user$: Observable<ProfileWithRecipes | null> = this.token$.pipe(
        switchMap((_) => this.authService.getUser()),
    );

    constructor(
        private router: Router,
        private readonly localStorage: LocalStorageService,
        private readonly authService: AuthService,
    ) {}

    navigate(index: number): void {
        this.activeItemIndex = index;
    }
}
