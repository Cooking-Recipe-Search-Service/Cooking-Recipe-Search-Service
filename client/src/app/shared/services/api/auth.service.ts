import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HOST_API, TOKEN_TYPE } from 'src/libs/consts';
import {
    LoginProfile,
    LoginProfileResponse,
    ProfileWithRecipes,
    Recipe,
    RegistrationProfile,
} from 'src/libs/interfaces';
import { LocalStorageRecipesService } from '../local-storage/local-storage-recipes.service';
import { LocalStorageUserService } from '../local-storage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private headers = {};

    constructor(
        @Inject(HOST_API) private readonly baseUrl: string,
        private readonly http: HttpClient,
        private readonly localStorage: LocalStorageUserService,
        private readonly localStorageRecipes: LocalStorageRecipesService,
        @Inject(TOKEN_TYPE) private readonly tokenType: string,
    ) {
        this.localStorage.getToken().subscribe((token) => {
            if (token)
                this.headers = {
                    Authorization: `${this.tokenType} ${token}`,
                };
        });
    }

    removeFromFavorites(recipe: Recipe): Observable<ProfileWithRecipes> {
        return this.http.put<ProfileWithRecipes>(
            `${this.baseUrl}/user/deleteRecipeToFavoritesByRecipeId/${recipe.id}`,
            recipe,
            {
                headers: this.headers,
            },
        );
    }

    addToFavorites(recipe: Recipe): Observable<ProfileWithRecipes> {
        return this.http.put<ProfileWithRecipes>(
            `${this.baseUrl}/user/addRecipeToFavoritesByRecipeId/${recipe.id}`,
            recipe,
            {
                headers: this.headers,
            },
        );
    }

    getUser(): Observable<ProfileWithRecipes> {
        return this.http.get<ProfileWithRecipes>(
            `${this.baseUrl}/user/current`,
            {
                headers: this.headers,
            },
        );
    }

    registerUser(user: RegistrationProfile): Observable<RegistrationProfile> {
        return this.http.post<RegistrationProfile>(
            `${this.baseUrl}/auth/signup`,
            user,
        );
    }

    loginUser(user: LoginProfile): Observable<ProfileWithRecipes> {
        return this.http
            .post<LoginProfileResponse>(`${this.baseUrl}/auth/signin`, user)
            .pipe(
                switchMap((response) => {
                    this.localStorage.setToken(response.token);
                    // this.localStorage.setUser({
                    //     username: response.username,
                    //     password: user.password,
                    //     email: response.email,
                    //     photoUrl: '',
                    //     role: res
                    // });
                    return this.getUser().pipe(
                        map((user) => ({
                            ...user,
                            password: response.password,
                        })),
                    );
                }),
                map((user) => {
                    this.localStorage.setUser({
                        username: user.username,
                        password: user.password,
                        email: user.email,
                        photoUrl: '',
                        role: user.role,
                    });
                    this.localStorageRecipes.setRecipesToLocal(user.recipes);
                    return user;
                }),
            );
    }
}
