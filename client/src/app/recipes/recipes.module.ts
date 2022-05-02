import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesPageModule } from './recipes-page/recipes-page.module';
import { GoogleLoginProvider } from 'angularx-social-login';
import { environment } from 'src/environments/environment';

@NgModule({
    imports: [CommonModule, RecipeRoutingModule, RecipesPageModule],
})
export class RecipesModule {
    static forRoot(): ModuleWithProviders<RecipesModule> {
        return {
            ngModule: RecipesModule,
            providers: [
                {
                    provide: 'SocialAuthServiceConfig',
                    useValue: {
                        autoLogin: true,
                        providers: [
                            {
                                id: GoogleLoginProvider.PROVIDER_ID,
                                provider: new GoogleLoginProvider(
                                    environment.GOOGLE_TOKEN,
                                ),
                            },
                        ],
                    },
                },
            ],
        };
    }
}
