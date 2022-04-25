import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipePreviewComponent } from './recipe-preview.component';
import {
    TuiBadgeModule,
    TuiIslandModule,
    TuiLineClampModule,
} from '@taiga-ui/kit';
import { ColorizePipeModule } from 'src/app/shared/modules/colorize-pipe/colorize-pipe.module';
import { RecipeTagsPipeModule } from 'src/app/shared/modules/recipe-tags/recipe-tags-pipe.module';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiGroupModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import { IngredientModule } from 'src/app/shared/components/ingredient/ingredient.module';
import { DeclensionsPipeModule } from 'src/app/shared/modules/declensions-pipe/declensions-pipe.module';
import { RouterModule } from '@angular/router';
import { Base64ImageConvertModule } from 'src/app/shared/modules/base64-image-convert/base64-image-convert.module';

@NgModule({
    declarations: [RecipePreviewComponent],
    imports: [
        CommonModule,
        TuiIslandModule,
        RecipeTagsPipeModule,
        ColorizePipeModule,
        TuiBadgeModule,
        TuiSvgModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiButtonModule,
        IngredientModule,
        TuiGroupModule,
        DeclensionsPipeModule,
        TuiLineClampModule,
        RouterModule,
        Base64ImageConvertModule
    ],
    exports: [RecipePreviewComponent],
})
export class RecipePreviewModule {}
