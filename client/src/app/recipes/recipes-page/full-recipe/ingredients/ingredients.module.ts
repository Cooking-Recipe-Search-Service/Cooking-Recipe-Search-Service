import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './ingredients/ingredient.component';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { IngredientsComponent } from './ingredients.component';

@NgModule({
    declarations: [IngredientsComponent, IngredientComponent],
    imports: [
        CommonModule,
        TuiInputModule,
        TuiIslandModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
    ],
    exports: [IngredientsComponent],
})
export class IngredientsModule {}
