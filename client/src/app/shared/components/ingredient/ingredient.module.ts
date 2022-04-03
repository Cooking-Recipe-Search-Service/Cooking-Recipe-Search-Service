import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './ingredient.component';

@NgModule({
    declarations: [IngredientComponent],
    imports: [CommonModule],
    exports: [IngredientComponent],
})
export class IngredientModule {}
