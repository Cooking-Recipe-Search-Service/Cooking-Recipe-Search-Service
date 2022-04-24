import { Ingredient } from './ingredient';
import { EnergyValue } from './ingredient-post-request';

export interface Recipe {
    readonly id: number;
    readonly name: string;
    readonly cookingTime: number;
    readonly portionQuantity: number;
    readonly countryId: string;
    readonly categoryId: string;
    readonly image?: string;
    readonly ingredientsInfo: readonly Ingredient[];
    readonly energyValue?: EnergyValue;
}
