import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_API } from '@app/consts';
import { EMPTY, Observable } from 'rxjs';
import {
    IngredientPostRequest,
    IngredientSearch,
    Recipe,
    SimpleInterface,
} from '@app/interfaces';
import { RecipePayload } from '@app/interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class RecipesApiService {
    constructor(
        @Inject(HOST_API) private readonly baseUrl: string,
        private readonly http: HttpClient,
    ) {}

    searchRecipe(query: string): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(
            `${this.baseUrl}/recipes/search?${query}`,
        );
    }

    postRecipe(recipe: RecipePayload): Observable<RecipePayload> {
        return this.http.post<RecipePayload>(`${this.baseUrl}/recipes`, recipe);
    }

    postIngredient(
        ingredient: IngredientPostRequest,
    ): Observable<IngredientPostRequest> {
        return this.http.post<IngredientPostRequest>(
            `${this.baseUrl}/ingredients`,
            ingredient,
        );
    }

    getIngredient(ingredient: string): Observable<readonly IngredientSearch[]> {
        return this.http.get<readonly IngredientSearch[]>(
            `${this.baseUrl}/ingredient_search?name_like=${ingredient}`,
        );
    }

    getDefaultRecipes(): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(`${this.baseUrl}/recipes`);
    }

    getRecipeById(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.baseUrl}/recipes/${id}`);
    }

    getRecipeByCategory(category: string): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(
            `${this.baseUrl}/recipes?category=${category}`,
        );
    }

    getIngredients(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrl}/ingredients`,
        );
    }

    getCountries(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrl}/countries`,
        );
    }

    getCategories(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrl}/category`,
        );
    }
}
