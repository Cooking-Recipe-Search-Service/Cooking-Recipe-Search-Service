import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRecipeComponent } from './full-recipe.component';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { RecipeTagsPipeModule } from 'src/app/shared/modules/recipe-tags/recipe-tags-pipe.module';
import { ColorizePipeModule } from 'src/app/shared/modules/colorize-pipe/colorize-pipe.module';

@NgModule({
    declarations: [FullRecipeComponent],
    imports: [
        CommonModule,
        TuiBadgeModule,
        TuiSvgModule,
        RecipeTagsPipeModule,
        ColorizePipeModule,
    ],
    exports: [FullRecipeComponent],
})
export class FullRecipeModule {}
