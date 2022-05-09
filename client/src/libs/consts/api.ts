import { InjectionToken } from '@angular/core';

export const HOST_API: InjectionToken<string> = new InjectionToken(
    'Application base address',
);

export const TOKEN_TYPE: InjectionToken<string> = new InjectionToken(
    'Application token type',
);
