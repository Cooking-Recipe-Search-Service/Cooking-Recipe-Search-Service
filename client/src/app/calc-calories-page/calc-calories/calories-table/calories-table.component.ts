import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    switchMap,
} from 'rxjs/operators';
import { RecipesApiService } from 'src/app/shared/services/recipes-api-service.service';
import { MEASURMENT_MAPPER } from 'src/libs/consts';
import { 
     IngredientSearch } from 'src/libs/interfaces';

@Component({
    selector: 'app-calories-table',
    templateUrl: './calories-table.component.html',
    styleUrls: ['./calories-table.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaloriesTableComponent {
    readonly columns = [
        'Ингредиент',
        'Колличество',
        'Единица измерения',
        'Белки',
        'Жиры',
        'Углеводы',
        'Калории',
        'actions',
    ] as const;

    readonly options = { updateOn: 'blur' } as const;

    ingredientsData = [
        {
            name: '',
            quantity: 0,
            measurment_value: 'шт',
            protein: 0,
            fats: 0,
            carbs: 0,
            calories: 0,
        },
    ];

    inputChanged = new BehaviorSubject<string>('');

    readonly items$ = this.inputChanged.pipe(
        distinctUntilChanged(),
        debounceTime(1000),
        filter((name) => !!name),
        switchMap((value) =>
            this.recipesService.getIngredient(value).pipe(
                map((response: readonly IngredientSearch[]) => {
                    console.log(value);

                    if (
                        response.length === 1 &&
                        String(response[0]) === value
                    ) {
                        return [];
                    } else {
                        return response;
                    }
                }),
            ),
        ),
    );

    private readonly measurmentMapper = MEASURMENT_MAPPER;

    constructor(private readonly recipesService: RecipesApiService) {}

    updateIngredientName(index: number, item: IngredientSearch): void {
        this.inputChanged.next('');
        const quantity = this.measurmentMapper[item.measurment_value];
        this.ingredientsData = [
            ...this.ingredientsData.slice(0, index),
            { ...item, quantity },
            ...this.ingredientsData.slice(
                index + 1,
                this.ingredientsData.length,
            ),
        ];
    }


    updateIngredientQuantity(
        value: number,
        current: IngredientSearch,
        index: number,
    ): void {
        const lastQuantity =  this.ingredientsData[index].quantity
        const multiplier = this.measurmentMapper[current.measurment_value];
        console.log(lastQuantity)
        const updated = {
            ...current,
            quantity: value,
            protein:
                ((current.protein ) / ((lastQuantity || 1) * multiplier )) *
                value *
                multiplier,
            fats:
                (current.fats || 0 / (lastQuantity|| 1 * multiplier )) * value * multiplier,
            carbs:
                (current.carbs || 0 / (lastQuantity|| 1 * multiplier )) * value * multiplier,
            calories:
                (current.calories || 0 / (lastQuantity|| 1 * multiplier)) *
                value *
                multiplier,
        };
        console.log(updated);

        

        this.ingredientsData = [
            ...this.ingredientsData.slice(0, index),
            { ...updated },
            ...this.ingredientsData.slice(
                index + 1,
                this.ingredientsData.length,
            ),
        ];
    }

    remove(index: number): void {
        this.ingredientsData = [
            ...this.ingredientsData.slice(0, index - 1),
            ...this.ingredientsData.slice(index, this.ingredientsData.length),
        ];
    }

    addIngredient(): void {
        this.ingredientsData = [
            ...this.ingredientsData,
            {
                name: '',
                quantity: 0,
                measurment_value: 'шт',
                protein: 0,
                fats: 0,
                carbs: 0,
                calories: 0,
            },
        ];
    }
}
