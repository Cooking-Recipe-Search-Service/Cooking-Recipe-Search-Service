import { EnergyValue } from 'src/libs/interfaces';
const emptyEnergyValue: EnergyValue = {
    carbs: 0,
    calories: 0,
    fats: 0,
    proteins: 0,
};

export function mockIngredientsGenerator(value: number) {
    return {
        name: 'one',
        measurementValue: '',
        energyValue: emptyEnergyValue,
        value: value,
    };
}
