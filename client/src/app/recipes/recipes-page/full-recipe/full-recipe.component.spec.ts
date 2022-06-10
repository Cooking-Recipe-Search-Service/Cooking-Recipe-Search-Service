import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TuiLineClampModule } from '@taiga-ui/kit';
import { of } from 'rxjs';
import {
    expectText,
    expectTextByClass,
} from 'src/app/shared/helpers/test-helpers';
import { Base64ImageConvertModule } from 'src/app/shared/modules/base64-image-convert/base64-image-convert.module';
import { EnergyPipeModule } from 'src/app/shared/modules/energy-pipe/energy-pipe.module';
import { RecipeTagsPipeModule } from 'src/app/shared/modules/recipe-tags/recipe-tags-pipe.module';
import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { anything, mock, when } from 'ts-mockito';

import { FullRecipeComponent } from './full-recipe.component';
import { mockRecipe } from '../recipes-module-mocks.mock';
import { IngredientsModule } from './ingredients/ingredients.module';

describe('FullRecipeComponent', () => {
    let component: FullRecipeComponent;
    let fixture: ComponentFixture<FullRecipeComponent>;
    const recipeApiMock = mock<RecipesApiService>(RecipesApiService);

    beforeEach(async () => {
        when(recipeApiMock.getRecipeById(anything())).thenReturn(
            of(mockRecipe),
        );

        await TestBed.configureTestingModule({
            declarations: [FullRecipeComponent],
            imports: [
                RecipeTagsPipeModule,
                EnergyPipeModule,
                TuiLineClampModule,
                IngredientsModule,
                Base64ImageConvertModule,
            ],
            providers: [
                { provide: RecipesApiService, useValue: recipeApiMock },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({ id: '' }),
                    },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FullRecipeComponent);
        component = fixture.componentInstance;
        component.recipe$ = of(mockRecipe);
        fixture.detectChanges();
    });

    it('should display recipe', () => {
        expectText(fixture, 'name', 'Спагетти карбонара с беконом');
        expectText(fixture, 'description', 'hello'),
            expectTextByClass(fixture, '.step-0', '1');
        expectTextByClass(fixture, '.instruction-0', 'hello');
    });
});
