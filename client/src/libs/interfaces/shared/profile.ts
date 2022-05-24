export interface Profile {
    readonly username: string;
    readonly email: string;
    readonly photoUrl: string;
    readonly password: string;
    readonly role: UserRole;
}
export type UserRole = 'ROLE_USER' | 'ROLE_ADMIN';