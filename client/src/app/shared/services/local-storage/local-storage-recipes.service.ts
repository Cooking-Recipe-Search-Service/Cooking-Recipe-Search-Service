import { Inject, Injectable } from '@angular/core';
import {
    filterByKey,
    StorageService,
    STORAGE_EVENT,
    toValue,
} from '@ng-web-apis/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Recipe } from 'src/libs/interfaces';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageRecipesService {
    favoritsRecipes$$: BehaviorSubject<Record<string, Recipe>> =
        new BehaviorSubject<Record<string, Recipe>>(
            this.getRecipesFromStorage(),
        );

    constructor(
        @Inject(STORAGE_EVENT)
        private readonly event$: Observable<StorageEvent>,
        @Inject(StorageService) private readonly storageService: Storage,
    ) {
        this.event$
            .pipe(
                filterByKey('favorits'),
                toValue(),
                tap((value) =>
                    this.favoritsRecipes$$.next(JSON.parse(value || '""')),
                ),
            )
            .subscribe();
    }

    removeRecipes(): void {
        this.storageService.removeItem('favorits');
    }

    setRecipesToLocal(recipes: readonly Recipe[]): void {
        const recordRecipes = recipes.reduce(
            (accum, current) => ({
                ...accum,
                [current.id]: current,
            }),
            {} as Record<string, Recipe>,
        );
        this.favoritsRecipes$$.next(recordRecipes);
        this.setRecipeInStorage(recordRecipes);
    }

    removeRecipe(deletedCompany: Recipe): void {
        const companies = this.favoritsRecipes$$.getValue();

        delete companies[deletedCompany.id];
        this.favoritsRecipes$$.next(companies);

        this.setRecipeInStorage(companies);
    }

    addRecipe(recipe: Recipe): void {
        const newCompanies = {
            ...this.favoritsRecipes$$.getValue(),
            [recipe.id]: recipe,
        };
        this.favoritsRecipes$$.next(newCompanies);

        this.setRecipeInStorage(newCompanies);
    }

    isInStorage(id: string): Observable<boolean> {
        return this.favoritsRecipes$$.pipe(map((recipes) => !recipes[id]));
    }

    getRecipes(): Observable<readonly Recipe[]> {
        return this.favoritsRecipes$$.pipe(
            map((companies) => Object.values(companies)),
        );
    }

    private setRecipeInStorage(company: Record<string, Recipe>) {
        this.storageService.setItem('favorits', JSON.stringify(company));
    }

    private getRecipesFromStorage(): Record<string, Recipe> {
        return JSON.parse(this.storageService.getItem('favorits') || '""');
    }
}
