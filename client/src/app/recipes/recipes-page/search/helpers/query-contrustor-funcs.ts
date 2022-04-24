import { COOKING_TIME_MAPPER } from 'src/libs/consts';
import { isNotPresentOrEmptyString } from 'src/libs/helpers';
import { SimpleInterface } from 'src/libs/interfaces';

export function contructCategory(
    categories: readonly SimpleInterface[],
): string | null {
    if (categories && categories.length) {
        return categories
            .reduce(
                (accum, current) =>
                    accum + `category.name=or(${current.name})&`,
                '',
            )
            .slice(0, -1);
    }
    return null;
}

export function contructCountry(
    countries: readonly SimpleInterface[],
): string | null {
    if (countries && countries.length) {
        return countries
            .reduce(
                (accum, current) => accum + `country.name=or(${current.name})&`,
                '',
            )
            .slice(0, -1);
    }
    return null;
}

export function contructCookingTime(
    cookingTime: readonly SimpleInterface[],
): string | null {
    if (cookingTime && cookingTime.length) {
        return cookingTime
            .reduce((accum, current) => {
                const time = COOKING_TIME_MAPPER[current.name];
                if (time.length > 1) {
                    return (
                        accum +
                        `cookingTime=gte(${time[0]})&cookingTime=and(lte(${time[0]}))&`
                    );
                }
                return accum + `cookingTime=gte(${time[0]})&`;
            }, '')
            .slice(0, -1);
    }
    return null;
}

export function contructNameRecipe(name: string): string | null {
    return isNotPresentOrEmptyString(name)
        ? null
        : `name=contains(${name[0].toUpperCase() + name.slice(1)})`;
}

export function contructIngredients(
    includeIngredients: readonly SimpleInterface[],
    excludeIngredients: readonly SimpleInterface[],
): string {
    const ingredients: string[] = [];
    if (includeIngredients && includeIngredients.length) {
        ingredients.push(
            includeIngredients
                .reduce(
                    (accum, current) =>
                        accum + `ingredients.ingredient.name=${current.name}&`,
                    '',
                )
                .slice(0, -1),
        );
    }

    if (excludeIngredients && excludeIngredients.length) {
        ingredients.push(
            excludeIngredients
                .reduce(
                    (accum, current) =>
                        accum +
                        `ingredients.ingredient.name=and(not(${current.name}))&`,
                    '',
                )
                .slice(0, -1),
        );
    }

    return ingredients.join('&');
}
