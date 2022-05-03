import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
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

    user$!: Observable<Profile>;

    constructor(
        private readonly recipiesApi: RecipesApiService,
        private router: Router,
        public socialAuthServive: SocialAuthService,
    ) {
        this.user$ = socialAuthServive.authState.pipe(take(1));
    }

    loadRecipes(recipes: Observable<readonly Recipe[]>): void {
        this.searchedRecipes$ = recipes;
    }

    activeCategory(category: string): void {
        this.category = category;
    }

    logout(): void {
        this.socialAuthServive
            .signOut()
            .then(() => this.router.navigate(['admin-panel']));
    }
}
