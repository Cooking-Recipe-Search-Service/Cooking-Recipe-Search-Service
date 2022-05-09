import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private localStorage: LocalStorageService,
    ) {}

    canActivate(): Observable<boolean> {
        return this.localStorage.getToken().pipe(
            map((token: string | null) => !!token),
            tap((token: boolean) => {
                if (token === null) {
                    this.router.navigate(['/login']);
                }
            }),
        );
    }
}
