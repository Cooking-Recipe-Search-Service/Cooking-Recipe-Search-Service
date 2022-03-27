import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgWithSubtitleComponent } from './img-with-subtitle.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ImgWithSubtitleComponent],
    imports: [CommonModule, RouterModule],
    exports: [ImgWithSubtitleComponent],
})
export class ImgWithSubtitleModule {}
