import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService, RecipesApiService } from '@app/shared/services';
import {
    BACKEND_MEASURMENT_MAPPER,
} from '@app/consts';

@Component({
    selector: 'app-admin-add-ingredient',
    templateUrl: './admin-add-ingredient.component.html',
    styleUrls: ['./admin-add-ingredient.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class AdminAddIngredientComponent {
    @Output() ingredientChanged = new EventEmitter<string>();

    ingredientForm = new FormGroup({
        name: new FormControl('', Validators.required),
        measurementValueType: new FormControl('', Validators.required),

        calories: new FormControl(null, Validators.required),
        fats: new FormControl(null, Validators.required),
        carbs: new FormControl(null, Validators.required),
        proteins: new FormControl(null, Validators.required),
    });

    readonly loading$ = new BehaviorSubject<boolean>(false);

    readonly measurementValues = ['гр', 'мл', 'шт'];

    constructor(
        private readonly recipesService: RecipesApiService,
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        private readonly destroy$: TuiDestroyService,
        private auth: AuthService,
    ) {}

    get name(): FormControl {
        return this.ingredientForm.controls.name as FormControl;
    }

    get measurementValueType(): FormControl {
        return this.ingredientForm.controls.measurementValueType as FormControl;
    }

    get fats(): FormControl {
        return this.ingredientForm.controls.fats as FormControl;
    }

    get calories(): FormControl {
        return this.ingredientForm.controls.calories as FormControl;
    }

    get carbs(): FormControl {
        return this.ingredientForm.controls.carbs as FormControl;
    }

    get proteins(): FormControl {
        return this.ingredientForm.controls.proteins as FormControl;
    }

    addIngredient(): void {
        this.loading$.next(true);
        const measurementValueType =
            BACKEND_MEASURMENT_MAPPER[this.measurementValueType.value];
        let name = this.name.value;

        name = name[0].toUpperCase() + name.slice(1);

        const energyValue = {
            calories: this.calories.value,
            carbs: this.carbs.value * 1000,
            proteins: this.proteins.value * 1000,
            fats: this.fats.value * 1000,
        };
        const payload = {
            name,
            measurementValueType,
            energyValue,
        };
        this.recipesService
            .postIngredient(payload)
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (_) => {
                    this.loading$.next(false);
                    this.ingredientChanged.emit('done');
                    this.ingredientForm.reset();
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

    delete() {
        this.auth.deleteRecipe(20).subscribe();
    }
}
