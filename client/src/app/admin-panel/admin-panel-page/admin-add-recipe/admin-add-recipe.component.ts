import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import {
    markControlAsTouchedAndValidate,
    TuiContextWithImplicit,
    TuiDestroyService,
    TuiStringHandler,
    TuiValidationError,
} from '@taiga-ui/cdk';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';
import { SimpleInterface } from 'src/libs/interfaces';

@Component({
    selector: 'app-admin-add-recipe',
    templateUrl: './admin-add-recipe.component.html',
    styleUrls: ['./admin-add-recipe.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Не может быть пустым',
            },
        },
    ],
})
export class AdminAddRecipeComponent {
    @Input() set ingredient(i: string) {
        this.ingredients$ = this.recipesService
            .getIngredients()
            .pipe(delay(1000));
    }

    private readonly search$ = new Subject<string>();

    readonly loading$ = new BehaviorSubject<boolean>(false);

    recipeForm = new FormGroup({
        name: new FormControl('', Validators.required),
        cookingTime: new FormControl(null, Validators.required),
        portionQuantity: new FormControl(null, Validators.required),
        countryId: new FormControl(null, Validators.required),
        categoryId: new FormControl(null, Validators.required),
        description: new FormControl(),
        ingredients: new FormArray([
            new FormGroup({
                id: new FormControl(null, Validators.required),
                value: new FormControl(null, Validators.required),
            }),
        ]),
        instructions: new FormArray([new FormControl(null)], notEmptySteps),
    });

    readonly countries$: Observable<readonly SimpleInterface[]> =
        this.recipesService.getCountries();

    ingredients$: Observable<readonly SimpleInterface[]> =
        this.recipesService.getIngredients();

    readonly categories$: Observable<readonly SimpleInterface[]> =
        this.recipesService.getCategories();

    constructor(
        private readonly recipesService: RecipesApiService,
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        private readonly destroy$: TuiDestroyService,
    ) {}

    readonly stringify: TuiStringHandler<
        SimpleInterface | TuiContextWithImplicit<SimpleInterface>
    > = (item) => ('name' in item ? item.name : item.$implicit.name);

    get name(): FormControl {
        return this.recipeForm.controls.name as FormControl;
    }

    get cookingTime(): FormControl {
        return this.recipeForm.controls.cookingTime as FormControl;
    }

    get portionQuantity(): FormControl {
        return this.recipeForm.controls.portionQuantity as FormControl;
    }

    get countryId(): FormControl {
        return this.recipeForm.controls.countryId as FormControl;
    }

    get categoryId(): FormControl {
        return this.recipeForm.controls.categoryId as FormControl;
    }

    get description(): FormControl {
        return this.recipeForm.controls.description as FormControl;
    }

    get instructions(): FormArray {
        return this.recipeForm.controls.instructions as FormArray;
    }

    get ingredients(): FormArray {
        return this.recipeForm.controls.ingredients as FormArray;
    }

    getStep(index: number): FormControl {
        return this.instructions.controls[index] as FormControl;
    }

    getIngredientId(index: number): FormControl {
        return (this.ingredients.controls[index] as FormGroup).controls
            .id as FormControl;
    }

    getIngredientValue(index: number): FormControl {
        return (this.ingredients.controls[index] as FormGroup).controls
            .value as FormControl;
    }

    onSearch(search: string | null): void {
        this.search$.next(search || '');
    }

    addStep(): void {
        this.instructions.controls.push(new FormControl());
    }

    removeStep(index: number): void {
        this.instructions.removeAt(index);
    }

    addRecipe(): void {
        markControlAsTouchedAndValidate(this.recipeForm);
        const { name, cookingTime, description, portionQuantity } =
            this.recipeForm.value;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const payload = {
            name: name[0].toUpperCase() + name.slice(1),
            cookingTime,
            description,
            portionQuantity,
            countryId: this.recipeForm.value.countryId.id,
            categoryId: this.recipeForm.value.countryId.id,
            instructions: this.recipeForm.value.instructions.map(
                (instruction: string, ind: number) => ({
                    itemNumber: ind,
                    instruction: instruction,
                }),
            ),
            ingredients: this.recipeForm.value.ingredients.map(
                (ingredient: { id: SimpleInterface; value: number }) => ({
                    id: ingredient.id.id,
                    value: ingredient.value,
                }),
            ),
        };
        this.recipesService
            .postRecipe(payload)
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (_) => {
                    this.loading$.next(false);
                    this.notificationsService
                        .show('', {
                            label: 'Ингредиент добавлен',
                            status: TuiNotification.Success,
                        })
                        .subscribe();
                },
                (error) => {
                    this.loading$.next(false);
                    this.notificationsService
                        .show(error.message, {
                            label: 'Ошибка',
                            status: TuiNotification.Error,
                        })
                        .subscribe();
                },
            );
    }

    removeIngredient(index: number): void {
        this.ingredients.removeAt(index);
    }

    addIngredient(): void {
        this.ingredients.push(
            new FormGroup({
                id: new FormControl(null, Validators.required),
                value: new FormControl(null, Validators.required),
            }),
        );
    }
}

function notEmptySteps(field: AbstractControl): Validators | null {
    const steps = field.value;
    return steps.length && steps[0] !== '' && steps[0] !== null
        ? null
        : {
              notEmptySteps: new TuiValidationError(
                  'Должен быть хотя бы один не пустой шаг',
              ),
          };
}
