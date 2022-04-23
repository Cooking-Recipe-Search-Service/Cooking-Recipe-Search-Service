import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddRecipeComponent } from './admin-add-recipe.component';

@NgModule({
    declarations: [AdminAddRecipeComponent],
    imports: [CommonModule],
    exports: [AdminAddRecipeComponent],
})
export class AdminAddRecipeModule {}
