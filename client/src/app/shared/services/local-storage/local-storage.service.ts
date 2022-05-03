import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
    filterByKey,
    StorageService,
    STORAGE_EVENT,
    toValue,
} from '@ng-web-apis/storage';
import { SocialAuthService } from 'angularx-social-login';
import { Profile } from 'src/libs/interfaces';
import { tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    email$$: BehaviorSubject<string | null> = new BehaviorSubject<
        string | null
    >(null);

    googleUser$: Observable<Profile> = this.socialAuthService.authState;

    constructor(
        @Inject(STORAGE_EVENT)
        private readonly event$: Observable<StorageEvent>,
        private socialAuthService: SocialAuthService,
        @Inject(StorageService) private readonly storageService: Storage,
    ) {
        this.event$
            .pipe(
                filterByKey('user'),
                toValue(),
                tap((value) => this.email$$.next(JSON.parse(value || ''))),
            )
            .subscribe();
        this.googleUser$.subscribe((user) => {
            this.email$$.next(user ? user.email : null);
            this.setEmailToLocalStorage(user ? user.email : null);
        });
    }

    getUser(): Observable<string | null> {
        return this.email$$.asObservable();
    }

    private setEmailToLocalStorage(email: string | null) {
        this.storageService.setItem('user', JSON.stringify(email));
    }
}
