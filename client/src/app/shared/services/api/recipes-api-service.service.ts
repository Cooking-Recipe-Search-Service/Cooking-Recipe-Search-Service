import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_API } from 'src/libs/consts';
import { Observable } from 'rxjs';
import {
    IngredientPostRequest,
    IngredientSearch,
    Recipe,
    SimpleInterface,
} from 'src/libs/interfaces';
import { RecipePayload } from 'src/libs/interfaces/shared/recipe-payload';


@Injectable({
    providedIn: 'root',
})
export class RecipesApiService {
    private baseUrlReal = 'http://localhost:8080/api';




    constructor(
        @Inject(HOST_API) private readonly baseUrl: string,
        private readonly http: HttpClient,
    ) {

    }

    searchRecipe(query: string): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(
            `${this.baseUrlReal}/recipes/search?${query}`
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
            `${this.baseUrl}/ingredient_search?name_like=${ingredient}`
        );
    }

    getDefaultRecipes(): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(`${this.baseUrlReal}/recipes`);
    }

    getRecipeById(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.baseUrlReal}/recipes/${id},`);
    }

    getRecipeByCategory(category: string): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(
            `${this.baseUrl}/recipes?category=${category}`,
        );
    }

    getIngredients(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrlReal}/ingredients`,
        );
    }

    getCountries(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrlReal}/countries`,
        );
    }

    getCategories(): Observable<readonly SimpleInterface[]> {
        return this.http.get<readonly SimpleInterface[]>(
            `${this.baseUrlReal}/category`,
        );
    }
}
