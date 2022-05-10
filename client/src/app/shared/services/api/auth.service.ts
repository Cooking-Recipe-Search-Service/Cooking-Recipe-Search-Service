import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HOST_API, TOKEN_TYPE } from 'src/libs/consts';
import {
    LoginProfile,
    LoginProfileResponse,
    Profile,
    Recipe,
    RegistrationProfile,
} from 'src/libs/interfaces';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrlReal = 'http://localhost:8080/api';

    private headers = {};

    constructor(
        @Inject(HOST_API) private readonly baseUrl: string,
        private readonly http: HttpClient,
        private readonly localStorage: LocalStorageService,
        @Inject(TOKEN_TYPE) private readonly tokenType: string,
    ) {
        this.localStorage.getToken().subscribe((token) => {
            if (token)
                this.headers = {
                    Authorization: `${this.tokenType} ${token}`,
                };
        });
    }

    getFavorits(): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(`${this.baseUrl}/favorits`, {
            headers: this.headers,
        });
    }

    getUser(): Observable<Profile> {
        return this.http.get<Profile>(`${this.baseUrlReal}/user/current`, {
            headers: this.headers,
        });
    }

    registerUser(user: RegistrationProfile): Observable<RegistrationProfile> {
        return this.http.post<RegistrationProfile>(
            `${this.baseUrlReal}/auth/signup`,
            user,
        );
    }

    loginUser(user: LoginProfile): Observable<LoginProfileResponse> {
        return this.http.post<LoginProfileResponse>(
            `${this.baseUrlReal}/auth/signin`,
            user,
        );
    }
}
