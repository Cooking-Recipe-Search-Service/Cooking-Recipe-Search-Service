import { Pipe, PipeTransform } from '@angular/core';
import { COLORS_MAPPER } from 'src/libs/consts';

@Pipe({
    name: 'colorize',
})
export class ColorizePipe implements PipeTransform {
    transform(index: number): string {
        return COLORS_MAPPER[index];
    }
}
