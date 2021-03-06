import { Ingredient } from './ingredient';
import { EnergyValue } from './ingredient-post-request';
import { Instruction } from './instruction';

export interface Recipe {
    readonly id: number;
    readonly name: string;
    readonly cookingTime: number;
    readonly portionQuantity: number;
    readonly countryName: string;
    readonly categoryName: string;
    readonly image: string;
    readonly ingredientsInfo: readonly Ingredient[];
    readonly energyValue: EnergyValue;
    readonly instructions: readonly Instruction[];
    readonly description: string;
}
