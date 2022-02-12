import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRecipeComponent } from './full-recipe.component';

@NgModule({
    declarations: [FullRecipeComponent],
    imports: [CommonModule],
    exports: [FullRecipeComponent],
})
export class FullRecipeModule {}
