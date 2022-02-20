import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { SearchModule } from './search/search.module';

@NgModule({
    declarations: [RecipesComponent],
    imports: [CommonModule, SearchModule],
})
export class RecipesModule {}
