import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';

import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { Recipe } from 'src/libs/interfaces';

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

    constructor(
        private readonly recipiesApi: RecipesApiService,
        private router: Router,
        public socialAuthServive: SocialAuthService,
    ) {}

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
