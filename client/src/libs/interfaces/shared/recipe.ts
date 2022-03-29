import { Ingredient } from './ingredient';

export interface Recipe {
    readonly id: number;
    readonly img: string;
    readonly name: string;
    readonly cooking_time: number;
    readonly category: string;
    readonly recipe_description: string;
    readonly energy_value_per_portion: Record<string, number>;
    readonly indredients: readonly Ingredient[];
    readonly portion_quantity: number;
    readonly steps: readonly string[];
}
