import { Pipe, PipeTransform } from '@angular/core';
import { TAGS_MAPPER } from '@app/consts';
import { Recipe, RecipeTag } from '@app/interfaces';

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
        if (h === 0) return `${m}мин`;
        return m === 0 ? `${h}ч` : `${h}ч ${m}мин`;
    }
}
