import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/api/auth.service';

import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Profile, Recipe } from 'src/libs/interfaces';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {
    recipes$ = this.recipiesApi.getDefaultRecipes();

    category = '';

    searchedRecipes$!: Observable<readonly Recipe[]>;

    token$: Observable<string | null> = this.localStorage.getToken();

    user$: Observable<Profile | null> = this.token$.pipe(
        filter((token) => token !== null),
        switchMap((token) => this.authService.getUser(token)),
    );

    constructor(
        private readonly recipiesApi: RecipesApiService,
        private router: Router,
        private localStorage: LocalStorageService,
        private readonly authService: AuthService,
    ) {
        // this.token$ = localStorage.getUser();
    }

    loadRecipes(recipes: Observable<readonly Recipe[]>): void {
        this.searchedRecipes$ = recipes;
    }

    activeCategory(category: string): void {
        this.category = category;
    }

    logout(): void {
        // this.socialAuthServive
        //     .signOut()
        //     .then(() => this.router.navigate(['admin-panel']));
    }
}
