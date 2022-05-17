import { Recipe } from '.';

export interface ProfileWithRecipes {
    readonly token: string;
    readonly username: string;
    readonly email: string;
    readonly photoUrl: string;
    readonly recipes: readonly Recipe[];
}
