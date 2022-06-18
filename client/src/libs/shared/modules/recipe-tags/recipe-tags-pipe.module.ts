import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeTagsPipe } from './recipe-tags.pipe';

@NgModule({
    declarations: [RecipeTagsPipe],
    imports: [CommonModule],
    exports: [RecipeTagsPipe],
})
export class RecipeTagsPipeModule {}
