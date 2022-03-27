import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorizePipe } from './colorize.pipe';

@NgModule({
    declarations: [ColorizePipe],
    imports: [CommonModule],
    exports: [ColorizePipe],
})
export class ColorizePipeModule {}
