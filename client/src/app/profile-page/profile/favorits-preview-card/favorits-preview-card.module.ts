import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritsPreviewCardComponent } from './favorits-preview-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';

@NgModule({
    declarations: [FavoritsPreviewCardComponent],
    imports: [CommonModule, TuiIslandModule],
    exports: [FavoritsPreviewCardComponent],
})
export class FavoritsPreviewCardModule {}
