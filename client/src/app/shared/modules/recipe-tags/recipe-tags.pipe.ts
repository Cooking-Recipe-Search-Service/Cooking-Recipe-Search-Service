import { Pipe, PipeTransform } from '@angular/core';
import { TAGS_MAPPER } from 'src/libs/consts';
import { RecipeTag } from 'src/libs/interfaces';
import { Recipe } from 'src/libs/interfaces/shared/recipe';

@Pipe({
    name: 'recipeTags',
})
export class RecipeTagsPipe implements PipeTransform {
    transform(recipe: Recipe): readonly RecipeTag[] {
        return [
            {
                icon: TAGS_MAPPER.category,
                label: recipe.category,
            },
            {
                icon: TAGS_MAPPER.cooking_time,
                label: String(recipe.cooking_time),
            },
        ];
    }
}
