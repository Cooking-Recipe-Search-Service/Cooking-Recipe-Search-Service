import { InjectionToken } from '@angular/core';

export const HOST_API: InjectionToken<string> = new InjectionToken(
    'Application base address',
);
