import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { expectText } from 'src/app/shared/helpers/test-helpers';
import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { mockRecipe } from '../recipes-module-mocks.mock';
import { RecipePreviewModule } from '../recipe-preview/recipe-preview.module';

import { CategoryRecipesComponent } from './category-recipes.component';

describe('CategoryRecipesComponent', () => {
    let component: CategoryRecipesComponent;
    let fixture: ComponentFixture<CategoryRecipesComponent>;
    let recipesService: any;
    beforeEach(async () => {
        recipesService = jasmine.createSpyObj('recipesService', [
            'searchRecipe',
        ]);
        await TestBed.configureTestingModule({
            declarations: [CategoryRecipesComponent],
            imports: [CommonModule, RecipePreviewModule],
            providers: [
                {
                    provide: RecipesApiService,
                    useValue: recipesService,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryRecipesComponent);
        component = fixture.componentInstance;
        component.category = 'Паста и пицца';
        fixture.detectChanges();
    });

    it('should display category recipes', () => {
        recipesService.searchRecipe.and.returnValue(of([mockRecipe]));
        component.category = 'Паста и пицца';
        component.recipes$.subscribe((value) =>
            expect(value).toEqual([mockRecipe]),
        );
        expectText(fixture, 'category', 'Паста и пицца');
    });
});
