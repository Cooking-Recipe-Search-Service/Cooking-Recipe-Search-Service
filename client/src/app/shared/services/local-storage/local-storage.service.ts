import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
    filterByKey,
    StorageService,
    STORAGE_EVENT,
    toValue,
} from '@ng-web-apis/storage';
import { tap } from 'rxjs/operators';
import { LoginProfile } from 'src/libs/interfaces';
@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    token$$: BehaviorSubject<string | null> = new BehaviorSubject<
        string | null
    >(this.getTokenFromLocalStorage());

    user$$: BehaviorSubject<LoginProfile | null> =
        new BehaviorSubject<LoginProfile | null>(this.getUserFromStorage());

    constructor(
        @Inject(STORAGE_EVENT)
        private readonly event$: Observable<StorageEvent>,

        @Inject(StorageService) private readonly storageService: Storage,
    ) {
        this.event$
            .pipe(
                filterByKey('token'),
                toValue(),
                tap((value) => this.token$$.next(JSON.parse(value || ''))),
            )
            .subscribe();
    }

    getToken(): Observable<string | null> {
        return this.token$$.asObservable();
    }

    getUser(): LoginProfile | null {
        return this.user$$.getValue();
    }

    setToken(token: string): void {
        this.token$$.next(token);
        this.setTokenToLocalStorage(token);
    }

    setUser(user: LoginProfile): void {
        this.user$$.next(user);
        this.setUserToLocalStorage(user);
    }

    logoutUser(): void {
        this.user$$.next(null);
        this.token$$.next(null);
        this.storageService.removeItem('token');
        this.storageService.removeItem('user');
    }

    private setTokenToLocalStorage(token: string | null) {
        this.storageService.setItem('token', JSON.stringify(token));
    }

    private setUserToLocalStorage(user: LoginProfile) {
        this.storageService.setItem('user', JSON.stringify(user));
    }

    private getTokenFromLocalStorage(): string {
        return this.storageService.getItem('token') || '';
    }

    private getUserFromStorage(): LoginProfile | null {
        return JSON.parse(this.storageService.getItem('user') || '""');
    }
}
