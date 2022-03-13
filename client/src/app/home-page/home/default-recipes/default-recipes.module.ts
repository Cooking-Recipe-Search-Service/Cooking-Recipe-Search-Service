import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultRecipesComponent } from './default-recipes.component';
import { TuiIslandModule, TuiLazyLoadingModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';

@NgModule({
    declarations: [DefaultRecipesComponent],
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiSvgModule,
        TuiLazyLoadingModule,
    ],
    exports: [DefaultRecipesComponent],
})
export class DefaultRecipesModule {}
