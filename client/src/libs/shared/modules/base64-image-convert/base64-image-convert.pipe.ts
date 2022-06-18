import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'base64ImageConvert',
})
export class Base64ImageConvertPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {}

    transform(image: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(
            `data:image/jpeg;charset=utf-8;base64,${image}`,
        );
    }
}
