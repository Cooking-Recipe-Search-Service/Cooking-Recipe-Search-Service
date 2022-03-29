import { Pipe, PipeTransform } from '@angular/core';
import { EnergyValue } from 'src/libs/interfaces/frontend/energy-value';

@Pipe({
    name: 'energy',
})
export class EnergyPipe implements PipeTransform {
    transform(energy: Record<string, number>): readonly EnergyValue[] {
        return [
            {
                label: 'Калорийность',
                value: `${energy.calories} Ккал `,
            },
            {
                label: 'Белки',
                value: ` ${energy.protein}гр`,
            },
            {
                label: 'Жиры',
                value: `${energy.fats}гр`,
            },
            {
                label: 'Углеводы',
                value: ` ${energy.carbs}гр`,
            },
        ];
    }
}
