export interface IngredientPostRequest {
    readonly name: string;
    readonly measurementValueType: string;
    readonly energyValue: EnergyValue;
}
export interface EnergyValue {
    readonly calories: number;
    readonly fats: number;
    readonly carbs: number;
    readonly proteins: number;
}
