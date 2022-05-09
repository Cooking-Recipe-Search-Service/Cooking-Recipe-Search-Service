import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HOST_API } from 'src/libs/consts';
import {
    LoginProfile,
    LoginProfileResponse,
    Profile,
    Recipe,
    RegistrationProfile,
} from 'src/libs/interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrlReal = 'http://localhost:8080/api';

    constructor(
        @Inject(HOST_API) private readonly baseUrl: string,
        private readonly http: HttpClient,
    ) {}

    getFavorits(): Observable<readonly Recipe[]> {
        return this.http.get<readonly Recipe[]>(`${this.baseUrl}/favorits`);
    }

    getUser(token: string | null): Observable<Profile> {
        return this.http.get<Profile>(`${this.baseUrl}/user`, { headers: {} });
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
