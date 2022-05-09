import { Roles } from './roles';

export interface RegistrationProfile {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: Roles;
}
