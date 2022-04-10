import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

interface Item {
    readonly ingredient: string;
    readonly quantity: number;
    readonly mass: string;
    readonly protein: number;
    readonly fats: number;
    readonly carbs: number;
    readonly calories: number;
}

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

    readonly ingredientsArray = new FormArray([new FormControl('')]);

    // readonly control = new FormControl('');

    addedIngredients = [
        {
            ingredient: '',
            quantity: 0,
            mass: 'шт',
            protein: 0,
            fats: 0,
            carbs: 0,
            calories: 0,
        },
    ];

    readonly options = { updateOn: 'blur' } as const;

    // readonly items$ = this.ingredientsArray.valueChanges.pipe(
    //     startWith(''),
    //     switchMap(value =>
    //         this.request(value).pipe(
    //             map(response => {
    //                 if (response.length === 1 && String(response[0]) === value) {
    //                     this.onClick(response[0]);

    //                     return [];
    //                 } else {
    //                     return response;
    //                 }
    //             }),
    //         ),
    //     ),
    // );

    // onClick({lastName, firstName}: User) {
    //     this.lastName = lastName;
    //     this.firstName = firstName;
    // }

    remove(index: number): void {
        this.addedIngredients = [
            ...this.addedIngredients.slice(0, index),
            ...this.addedIngredients.slice(
                index + 1,
                this.addedIngredients.length,
            ),
        ];
    }

    addIngredient(): void {
        this.addedIngredients = [
            ...this.addedIngredients,
            {
                ingredient: '',
                quantity: 0,
                mass: 'шт',
                protein: 0,
                fats: 0,
                carbs: 0,
                calories: 0,
            },
        ];
        this.ingredientsArray.push(new FormControl(''));
    }

    onValueChange(value: number, index: number, current: Item): void {
        const updated = { ...current, quantity: value };

        this.addedIngredients = [
            ...this.addedIngredients.slice(0, index - 1),
            updated,
            ...this.addedIngredients.slice(index, this.addedIngredients.length),
        ];
    }
}
