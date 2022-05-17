import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/api/auth.service';

import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { LocalStorageUserService } from 'src/app/shared/services/local-storage/local-storage.service';
import { ProfileWithRecipes, Recipe } from 'src/libs/interfaces';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {
    token$ = this.localStorage.getToken();

    user$: Observable<ProfileWithRecipes | null> = this.token$.pipe(
        switchMap((_) => this.authService.getUser()),
    );

    recipes$ = this.recipiesApi.getDefaultRecipes();

    category = '';

    searchedRecipes$!: Observable<readonly Recipe[]>;

    constructor(
        private readonly recipiesApi: RecipesApiService,
        private router: Router,
        private localStorage: LocalStorageUserService,
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
}
