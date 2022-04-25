import { Pipe, PipeTransform } from '@angular/core';
import { TAGS_MAPPER } from 'src/libs/consts';
import { Recipe, RecipeTag } from 'src/libs/interfaces';

@Pipe({
    name: 'recipeTags',
})
export class RecipeTagsPipe implements PipeTransform {
    transform(recipe: Recipe): readonly RecipeTag[] {
        return [
            {
                icon: TAGS_MAPPER.category,
                label: recipe.categoryName,
            },
            {
                icon: TAGS_MAPPER.cooking_time,
                label: this.convertTime(recipe.cookingTime),
            },
        ];
    }

    convertTime(time: number): string {
        const h = (time / 60) ^ 0;
        const m = time % 60;
        return h === 0 ? `${m} мин` : `${h} ч ${m} мин`;
    }
}
