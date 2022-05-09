import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_API, TOKEN_TYPE } from 'src/libs/consts';
import { Observable } from 'rxjs';
import {
    IngredientPostRequest,
    IngredientSearch,
    Recipe,
    SimpleInterface,
} from 'src/libs/interfaces';
import { RecipePayload } from 'src/libs/interfaces/shared/recipe-payload';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class RecipesApiService {
    private baseUrlReal = 'http://localhost:8080/api';

    private headers = {
        Authorization: ``,
    };

    constructor(
        private readonly localStorage: LocalStorageService,
        @Inject(TOKEN_TYPE) private readonly tokenType: string,
        @Inject(HOST_API) private readonly baseUrl: string,
        private readonly http: HttpClient,
    ) {
        this.localStorage.getToken().subscribe((token) => {
            if (token)
                this.headers = {
                    Authorization: `${this.tokenType} ${token}`,
                };
        });
    }

    searchRecipe(query: string): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(
            `${this.baseUrlReal}/recipes/search?${query}`,
            { headers: this.headers },
        );
    }

    postRecipe(recipe: RecipePayload): Observable<RecipePayload> {
        return this.http.post<RecipePayload>(
            `${this.baseUrlReal}/recipes`,
            recipe,
        );
    }

    postIngredient(
        ingredient: IngredientPostRequest,
    ): Observable<IngredientPostRequest> {
        return this.http.post<IngredientPostRequest>(
            `${this.baseUrlReal}/ingredients`,
            ingredient,
        );
    }

    getIngredient(ingredient: string): Observable<readonly IngredientSearch[]> {
        return this.http.get<readonly IngredientSearch[]>(
            `${this.baseUrl}/ingredient_search?name_like=${ingredient}`,
            { headers: this.headers },
        );
    }

    getDefaultRecipes(): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(`${this.baseUrlReal}/recipes`, {
            headers: this.headers,
        });
    }

    getRecipeById(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.baseUrlReal}/recipes/${id},`, {
            headers: this.headers,
        });
    }

    getRecipeByCategory(category: string): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(
            `${this.baseUrl}/recipes?category=${category}`,
            { headers: this.headers },
        );
    }

    getIngredients(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrlReal}/ingredients`,
            { headers: this.headers },
        );
    }

    getCountries(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrlReal}/countries`,
            { headers: this.headers },
        );
    }

    getCategories(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrlReal}/category`,
            { headers: this.headers },
        );
    }
}
