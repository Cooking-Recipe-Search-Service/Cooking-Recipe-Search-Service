import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
    imports: [CommonModule, HomeModule, HomeRoutingModule],
})
export class HomePageModule {}
