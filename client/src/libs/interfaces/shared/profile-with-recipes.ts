import { Recipe } from '.';

export interface ProfileWithRecipes {
    readonly username: string;
    readonly email: string;
    readonly photoUrl: string;
    readonly recipes: readonly Recipe[];
}
