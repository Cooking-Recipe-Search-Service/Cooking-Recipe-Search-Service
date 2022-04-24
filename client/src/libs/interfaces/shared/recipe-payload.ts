export interface RecipePayload {
    readonly name: string;
    readonly cookingTime: number;
    readonly portionQuantity: number;
    readonly countryId: number;
    readonly categoryId: number;
    readonly ingredients: readonly IngredientPayload[];
    readonly description: string;
    readonly instructions: readonly InstructionsPayload[];
}

export interface IngredientPayload {
    readonly id: number;
    readonly value: number;
}

export interface InstructionsPayload {
    readonly itemNumber: number;
    readonly instruction: string;
}
