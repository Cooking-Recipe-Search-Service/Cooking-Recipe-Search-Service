import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageRoutingModule } from './profile-page.routing.module';
import { ProfileModule } from './profile/profile.module';
import { GoogleLoginProvider } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
@NgModule({
    declarations: [],
    imports: [CommonModule, ProfilePageRoutingModule, ProfileModule],
})
export class ProfilePageModule {
    static forRoot(): ModuleWithProviders<ProfilePageModule> {
        return {
            ngModule: ProfilePageModule,
            providers: [
                {
                    provide: 'SocialAuthServiceConfig',
                    useValue: {
                        autoLogin: true, //keeps the user signed in
                        providers: [
                            {
                                id: GoogleLoginProvider.PROVIDER_ID,
                                provider: new GoogleLoginProvider(
                                    environment.GOOGLE_TOKEN || '',
                                    // '1019614254400-nc8438lqsde1rspq8a2e27g6vb9citdt.apps.googleusercontent.com',
                                ), // your client id
                            },
                        ],
                    },
                },
            ],
        };
    }
}
