import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRecipeComponent } from './full-recipe.component';
import { TuiBadgeModule, TuiLineClampModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { RecipeTagsPipeModule } from '@app/shared/modules';
import { EnergyPipeModule } from '@app/shared/modules';
import { IngredientsModule } from './ingredients/ingredients.module';
import { Base64ImageConvertModule } from '@app/shared/modules';

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
