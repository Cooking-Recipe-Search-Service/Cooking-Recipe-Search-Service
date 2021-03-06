import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultRecipesComponent } from './default-recipes.component';
import {
    TuiCarouselModule,
    TuiIslandModule,
    TuiLazyLoadingModule,
} from '@taiga-ui/kit';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [DefaultRecipesComponent],
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiSvgModule,
        TuiLazyLoadingModule,
        TuiButtonModule,
        TuiCarouselModule,
        FormsModule,
        ReactiveFormsModule,
        TuiCarouselModule,
    ],
    exports: [DefaultRecipesComponent],
})
export class DefaultRecipesModule {}
