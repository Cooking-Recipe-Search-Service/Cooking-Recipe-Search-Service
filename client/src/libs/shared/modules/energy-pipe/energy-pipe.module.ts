import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergyPipe } from './energy.pipe';

@NgModule({
    declarations: [EnergyPipe],
    imports: [CommonModule],
    exports: [EnergyPipe],
})
export class EnergyPipeModule {}
