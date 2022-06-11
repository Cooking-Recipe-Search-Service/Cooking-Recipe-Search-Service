import { mockRecipe } from 'src/app/recipes/recipes-page/recipes-module-mocks.mock';
import { RegistrationProfile } from 'src/libs/interfaces';

export const mockRegistrationProfile: RegistrationProfile = {
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'ROLE_USER',
    recipes: [mockRecipe],
};
