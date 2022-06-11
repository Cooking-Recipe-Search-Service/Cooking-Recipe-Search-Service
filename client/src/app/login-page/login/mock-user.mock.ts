import { mockRecipe } from 'src/app/recipes/recipes-page/recipes-module-mocks.mock';
import { ProfileWithRecipes } from 'src/libs/interfaces';

export const mockUser: ProfileWithRecipes = {
    username: 'name',
    email: 'email',
    photoUrl: '',
    recipes: [mockRecipe],
    role: 'ROLE_USER',
};
