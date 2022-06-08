import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRecipeComponent } from './full-recipe.component';
import { TuiBadgeModule, TuiLineClampModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { RecipeTagsPipeModule } from 'src/app/shared/modules/recipe-tags/recipe-tags-pipe.module';
import { EnergyPipeModule } from 'src/app/shared/modules/energy-pipe/energy-pipe.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { Base64ImageConvertModule } from 'src/app/shared/modules/base64-image-convert/base64-image-convert.module';

@NgModule({
    declarations: [FullRecipeComponent],
    imports: [
        CommonModule,
        TuiBadgeModule,
        TuiSvgModule,
        RecipeTagsPipeModule,
        EnergyPipeModule,
        TuiLineClampModule,
        IngredientsModule,
        Base64ImageConvertModule,
    ],
    exports: [FullRecipeComponent],
})
export class FullRecipeModule {}
