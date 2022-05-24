
import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@taiga-ui/core';
import { EnergyValue } from 'src/libs/interfaces';
import { EnergyValueCard } from 'src/libs/interfaces/frontend/energy-value-card';

const decimalLimit = 2
const decimalSeparator = '.' 

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
                value: ` ${format(energy.proteins)}гр`,
            },
            {
                label: 'Жиры',
                value: `${format(energy.fats )}гр`,
            },
            {
                label: 'Углеводы',
                value: ` ${format(energy.carbs)}гр`,
            },
        ];
    }
}

function format(value: number): string {
    return formatNumber(value / 1000 , decimalLimit, decimalSeparator)
}
