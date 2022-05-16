import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
    filterByKey,
    StorageService,
    STORAGE_EVENT,
    toValue,
} from '@ng-web-apis/storage';
import { Profile } from 'src/libs/interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageUserService {
    token$$: BehaviorSubject<string | null> = new BehaviorSubject<
        string | null
    >(this.getTokenFromLocalStorage());

    user$$: BehaviorSubject<Profile | null> =
        new BehaviorSubject<Profile | null>(this.getUserFromStorage());

    constructor(
        @Inject(STORAGE_EVENT)
        private readonly event$: Observable<StorageEvent>,
        @Inject(StorageService) private readonly storageService: Storage,
    ) {
        this.event$
            .pipe(
                filterByKey('token'),
                toValue(),
                tap((value) => this.token$$.next(JSON.parse(value || '""'))),
            )
            .subscribe();

            this.event$
            .pipe(
                filterByKey('user'),
                toValue(),
                tap((value) => this.user$$.next(JSON.parse(value || '""'))),
            )
            .subscribe();
    }

    getToken(): Observable<string | null> {
        return this.token$$.asObservable()
    }

    getUser():Observable< Profile | null> {
        return this.user$$.asObservable();
    }


    setToken(token: string | null): void {
        this.token$$.next(token);
        this.setTokenToLocalStorage(token);
    }

    setUser(user: Profile): void {
        this.user$$.next(user);
        this.setUserToLocalStorage(user);
    }

    logoutUser(): void {
        this.user$$.next(null);
        this.token$$.next(null);
        this.storageService.removeItem('token');
        this.storageService.removeItem('user');
    }

    private setRecipesToLocalStorage(recipes: number[]){
        this.storageService.setItem('favorits', JSON.stringify(recipes))
    }

    private setTokenToLocalStorage(token: string | null) {
        this.storageService.setItem('token', JSON.stringify(token));
    }

    private setUserToLocalStorage(user: Profile) {
        this.storageService.setItem('user', JSON.stringify(user));
    }

    private getTokenFromLocalStorage(): string {
        return this.storageService.getItem('token') || '';
    }

    private getUserFromStorage(): Profile | null {
        return JSON.parse(this.storageService.getItem('user') || '""');
    }
}
