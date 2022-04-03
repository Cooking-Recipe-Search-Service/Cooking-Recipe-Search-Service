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
                label: this.convertTime(recipe.cooking_time),
            },
        ];
    }

    convertTime(time: number): string {
        const h = (time / 60) ^ 0;
        const m = time % 60;
        return h === 0 ? `${m} мин` : `${h} ч ${m} мин`;
    }
}
