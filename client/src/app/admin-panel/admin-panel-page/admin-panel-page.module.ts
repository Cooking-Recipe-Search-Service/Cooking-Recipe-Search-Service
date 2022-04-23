import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelPageComponent } from './admin-panel-page.component';
import { AdminAddIngredientModule } from './admin-add-ingredient/admin-add-ingredient.module';
import { RouterModule } from '@angular/router';
import { TuiTabsModule } from '@taiga-ui/kit';
import { AdminAddRecipeModule } from './admin-add-recipe/admin-add-recipe.module';

@NgModule({
    declarations: [AdminPanelPageComponent],
    imports: [
        CommonModule,
        AdminAddIngredientModule,
        RouterModule,
        TuiTabsModule,
        AdminAddRecipeModule,
        AdminAddIngredientModule,
    ],
    exports: [AdminPanelPageComponent],
})
export class AdminPanelPageModule {}
