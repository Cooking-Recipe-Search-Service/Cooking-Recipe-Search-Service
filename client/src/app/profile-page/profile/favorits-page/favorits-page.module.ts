import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritsPageComponent } from './favorits-page.component';
import { RecipePreviewModule } from 'src/app/recipes/recipes-page/recipe-preview/recipe-preview.module';

@NgModule({
    declarations: [FavoritsPageComponent],
    imports: [CommonModule, RecipePreviewModule],
    exports: [FavoritsPageComponent],
})
export class FavoritsPageModule {}
