import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageRoutingModule } from './profile-page.routing.module';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ProfilePageRoutingModule,ProfileModule
  ]
})
export class ProfilePageModule { }
