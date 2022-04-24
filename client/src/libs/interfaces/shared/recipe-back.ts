import { IngredientBack } from './ingredient-back';

export interface RecipeBack {
    readonly id: number;
    readonly name: string;
    readonly cookingTime: number;
    readonly portionQuantity: number;
    readonly countryId: string;
    readonly categoryId: string;
    readonly ingredientsInfo: readonly IngredientBack[];
}
