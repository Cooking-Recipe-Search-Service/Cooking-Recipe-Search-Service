import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritsPreviewCardComponent } from './favorits-preview-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { Base64ImageConvertModule } from 'src/app/shared/modules/base64-image-convert/base64-image-convert.module';

@NgModule({
    declarations: [FavoritsPreviewCardComponent],
    imports: [CommonModule, TuiIslandModule,Base64ImageConvertModule],
    exports: [FavoritsPreviewCardComponent],
})
export class FavoritsPreviewCardModule {}
