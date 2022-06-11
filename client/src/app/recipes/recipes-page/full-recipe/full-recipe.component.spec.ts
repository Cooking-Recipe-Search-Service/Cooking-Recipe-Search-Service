import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TuiLineClampModule } from '@taiga-ui/kit';
import { of } from 'rxjs';
import {
    expectText,
    expectTextByClass,
} from '@app/shared/test-helpers';
import { Base64ImageConvertModule } from '@app/shared/modules';
import { EnergyPipeModule } from '@app/shared/modules';
import { RecipeTagsPipeModule } from '@app/shared/modules';
import { RecipesApiService } from '@app/shared/services';
import { anything, mock, when } from 'ts-mockito';

import { FullRecipeComponent } from './full-recipe.component';
import { mockRecipe } from '@app/shared/test-helpers';
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
