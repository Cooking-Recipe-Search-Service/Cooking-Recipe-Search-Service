import { UserRole } from './profile';
import { Recipe } from './recipe';

export interface RegistrationProfile {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: UserRole;
    readonly recipes: readonly Recipe[];
}
