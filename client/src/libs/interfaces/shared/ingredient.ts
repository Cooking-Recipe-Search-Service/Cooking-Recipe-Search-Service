import { EnergyValue } from './ingredient-post-request';

export interface Ingredient {
    readonly name: string;
    readonly measurementValue: string;
    readonly value: number;
    readonly energyValue: EnergyValue;
}
