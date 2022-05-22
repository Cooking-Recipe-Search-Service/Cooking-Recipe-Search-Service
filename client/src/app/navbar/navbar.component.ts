import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/libs/interfaces';
import { LocalStorageRecipesService } from '../shared/services/local-storage/local-storage-recipes.service';
import { LocalStorageUserService } from '../shared/services/local-storage/local-storage.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    user$: Observable<Profile | null> = this.localStorage.getUser();

    activeTab = 0;

    isOpenProfileCompanent = false;

    constructor(
        private readonly localStorage: LocalStorageUserService,
        private readonly localStorageRecipes: LocalStorageRecipesService,
        private readonly location: Location,
        private readonly router: Router,
        private readonly httpService: HttpClient
    ) {
        const obs$ = this.httpService.get('http://localhost:8080/api/category').pipe(shareReplay());
        const promise = fetch('http://localhost:8080/api/category');
 
        obs$.subscribe(() => console.log(1));
        obs$.subscribe(() => console.log(2));
        obs$.subscribe(() => console.log(3));
        
        promise.then(() => console.log(4));
        promise.then(() => console.log(5));
        promise.then(() => console.log(6));
    }

    logout(): void {
        this.localStorage.logoutUser();
        this.localStorageRecipes.removeRecipes();
        if (this.location.path().match(/profile/))
            this.router.navigate(['/recipes']);
    }
}
