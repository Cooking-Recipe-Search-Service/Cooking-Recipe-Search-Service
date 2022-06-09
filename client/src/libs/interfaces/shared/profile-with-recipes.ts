import { Recipe } from '.';
import { UserRole } from './profile';

export interface ProfileWithRecipes {
    readonly username: string;
    readonly email: string;
    readonly photoUrl: string;
    readonly recipes: readonly Recipe[];
    readonly role: UserRole;
}
