import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_API } from 'src/libs/consts';
import { Observable } from 'rxjs';
import { Ingredients } from 'src/libs/interfaces';

@Injectable({
    providedIn: 'root',
})
export class RecipesApiService {
    constructor(
        @Inject(HOST_API) private readonly baseUrl: string,
        private readonly http: HttpClient,
    ) {}

    getIngredients() {
        return this.http.get<readonly Ingredients[]>(
            `${this.baseUrl}/ingredients`,
        );
    }

    getKitchen(): Observable<readonly string[]> {
        return this.http.get<readonly string[]>(`${this.baseUrl}/kitchen`);
    }

    getCategories(): Observable<readonly string[]> {
        return this.http.get<readonly string[]>(`${this.baseUrl}/categories`);
    }

    getTime(): Observable<readonly string[]> {
        return this.http.get<readonly string[]>(`${this.baseUrl}/time`);
    }
}
