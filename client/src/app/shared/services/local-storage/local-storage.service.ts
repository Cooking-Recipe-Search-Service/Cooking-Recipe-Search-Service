import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
    filterByKey,
    StorageService,
    STORAGE_EVENT,
    toValue,
} from '@ng-web-apis/storage';
import { tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    token$$: BehaviorSubject<string | null> = new BehaviorSubject<
        string | null
    >(null);

    // user$: Observable<Profile> = of(false);

    constructor(
        @Inject(STORAGE_EVENT)
        private readonly event$: Observable<StorageEvent>,

        @Inject(StorageService) private readonly storageService: Storage,
    ) {
        this.event$
            .pipe(
                filterByKey('user'),
                toValue(),
                tap((value) => this.token$$.next(JSON.parse(value || ''))),
            )
            .subscribe();
        this.token$$.next(this.getTokenFromLocalStorage());
    }

    getToken(): Observable<string | null> {
        return this.token$$.asObservable();
    }

    setToken(token: string): void {
        this.token$$.next(token);
        this.setTokenToLocalStorage(token);
    }

    private setTokenToLocalStorage(token: string | null) {
        this.storageService.setItem('token', JSON.stringify(token));
    }

    private getTokenFromLocalStorage(): string {
        return this.storageService.getItem('token') || '';
    }
}
