import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritsPreviewCardComponent } from './favorits-preview-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { Base64ImageConvertModule } from '@app/shared/modules';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FavoritsPreviewCardComponent],
    imports: [
        CommonModule,
        TuiIslandModule,
        Base64ImageConvertModule,
        TuiButtonModule,
        RouterModule,
    ],
    exports: [FavoritsPreviewCardComponent],
})
export class FavoritsPreviewCardModule {}
