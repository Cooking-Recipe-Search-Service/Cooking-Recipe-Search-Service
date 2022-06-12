import {
    Profile,
    ProfileWithRecipes,
    Recipe,
    SimpleInterface,
} from '@app/interfaces';
import { EnergyValue, Ingredient } from '@app/interfaces';

const emptyEnergyValue: EnergyValue = {
    carbs: 0,
    calories: 0,
    fats: 0,
    proteins: 0,
};

export function mockIngredientsGenerator(value: number): Ingredient {
    return {
        name: 'one',
        measurementValue: '',
        energyValue: emptyEnergyValue,
        value: value,
    };
}

export const mockUser: Profile = {
    username: 'username',
    email: 'email',
    photoUrl: '',
    password: 'password',
    role: 'ROLE_USER',
};

export const mockAdmin: Profile = {
    username: 'username',
    email: 'email',
    photoUrl: '',
    password: 'password',
    role: 'ROLE_ADMIN',
};

export const mockRecipe: Recipe = {
    id: 1,
    name: 'Спагетти карбонара с беконом',
    cookingTime: 30,
    portionQuantity: 4,
    countryName: 'Итальянская',
    categoryName: 'Паста и пицца',
    instructions: [
        {
            itemNumber: 1,
            instruction: 'hello',
        },
    ],
    description: 'hello',

    ingredientsInfo: [
        {
            name: 'Бекон',
            measurementValue: 'г',
            value: 100,
            energyValue: {
                calories: 541,
                fats: 41780,
                carbs: 1430,
                proteins: 37040,
            },
        },
        {
            name: 'Оливковое масло',
            measurementValue: 'мл',
            value: 30,
            energyValue: {
                calories: 884,
                fats: 100000,
                carbs: 0,
                proteins: 0,
            },
        },
        {
            name: 'Сыр пармезан',
            measurementValue: 'г',
            value: 50,
            energyValue: {
                calories: 372,
                fats: 28000,
                carbs: 0,
                proteins: 30000,
            },
        },
        {
            name: 'Куриное яйцо',
            measurementValue: 'шт',
            value: 3,
            energyValue: {
                calories: 78,
                fats: 5440,
                carbs: 470,
                proteins: 6380,
            },
        },
        {
            name: 'Зубчик чеснока',
            measurementValue: 'шт',
            value: 1,
            energyValue: {
                calories: 4,
                fats: 20,
                carbs: 990,
                proteins: 190,
            },
        },
        {
            name: 'Спагетти',
            measurementValue: 'г',
            value: 450,
            energyValue: {
                calories: 157,
                fats: 920,
                carbs: 30680,
                proteins: 5760,
            },
        },
        {
            name: 'Соль',
            measurementValue: 'г',
            value: 10,
            energyValue: {
                calories: 0,
                fats: 0,
                carbs: 0,
                proteins: 0,
            },
        },
        {
            name: 'Молотый черный перец',
            measurementValue: 'г',
            value: 3,
            energyValue: {
                calories: 255,
                fats: 3260,
                carbs: 64810,
                proteins: 10950,
            },
        },
    ],
    image: '',
    energyValue: {
        calories: 572,
        fats: 44855,
        carbs: 24595,
        proteins: 22580,
    },
};

export const mockCategories: readonly SimpleInterface[] = [
    { id: 0, name: 'one' },
    { id: 1, name: 'two' },
];

export const mockCountries: readonly SimpleInterface[] = [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
];

export const mockIngredients: readonly SimpleInterface[] = [
    { id: 0, name: '3' },
    { id: 1, name: '4' },
];

export const mockUserWithResipes: ProfileWithRecipes = {
    username: 'name',
    email: 'email',
    photoUrl: '',
    recipes: [mockRecipe],
    role: 'ROLE_USER',
};
