import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveMapPageRoutingModule } from './interactive-map-page.routing';
import { MainHomeScreenModule } from './main-home-screen/main-home-screen.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MainHomeScreenModule,
        InteractiveMapPageRoutingModule,
        MainHomeScreenModule,
    ],
})
export class InteractiveMapPageModule {}
