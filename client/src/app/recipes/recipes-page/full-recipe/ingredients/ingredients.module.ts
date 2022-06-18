import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { IngredientsComponent } from './ingredients.component';
import { IngredientModule } from '@app/shared/components';
import {
    DeclensionsPipeModule,
    CalculatePortionsModule,
} from '@app/shared/modules';

@NgModule({
    declarations: [IngredientsComponent],
    imports: [
        CommonModule,
        TuiInputModule,
        TuiIslandModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        IngredientModule,
        DeclensionsPipeModule,
        CalculatePortionsModule,
    ],
    exports: [IngredientsComponent],
})
export class IngredientsModule {}
