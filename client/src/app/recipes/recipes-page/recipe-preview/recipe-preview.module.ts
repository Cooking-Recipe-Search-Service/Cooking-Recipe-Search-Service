import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipePreviewComponent } from './recipe-preview.component';
import {
    TuiBadgeModule,
    TuiIslandModule,
    TuiLineClampModule,
} from '@taiga-ui/kit';
import { RecipeTagsPipeModule } from '@app/shared/modules';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiGroupModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import { IngredientModule } from '@app/shared/components';
import { DeclensionsPipeModule } from '@app/shared/modules';
import { RouterModule } from '@angular/router';
import { Base64ImageConvertModule } from '@app/shared/modules';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
    declarations: [RecipePreviewComponent],
    imports: [
        CommonModule,
        TuiIslandModule,
        RecipeTagsPipeModule,
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
        Base64ImageConvertModule,
        TuiHintModule,
        TuiLetModule,
    ],
    exports: [RecipePreviewComponent],
})
export class RecipePreviewModule {}
