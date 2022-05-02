import { Pipe, PipeTransform } from '@angular/core';
import { EnergyValue } from 'src/libs/interfaces';
import { EnergyValueCard } from 'src/libs/interfaces/frontend/energy-value-card';

@Pipe({
    name: 'energy',
})
export class EnergyPipe implements PipeTransform {
    transform(energy: EnergyValue): readonly EnergyValueCard[] {
        return [
            {
                label: 'Калорийность',
                value: `${energy.calories} Ккал `,
            },
            {
                label: 'Белки',
                value: ` ${energy.proteins}гр`,
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
