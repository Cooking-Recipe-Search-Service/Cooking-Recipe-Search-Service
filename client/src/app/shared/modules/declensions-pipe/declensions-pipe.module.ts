import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclensionsPipe } from './declensions.pipe';

@NgModule({
    declarations: [DeclensionsPipe],
    imports: [CommonModule],
    exports: [DeclensionsPipe],
})
export class DeclensionsPipeModule {}
