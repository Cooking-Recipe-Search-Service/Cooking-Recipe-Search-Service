import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64ImageConvertPipe } from './base64-image-convert.pipe';




@NgModule({
  declarations: [
    Base64ImageConvertPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[Base64ImageConvertPipe]
})
export class Base64ImageConvertModule { }
