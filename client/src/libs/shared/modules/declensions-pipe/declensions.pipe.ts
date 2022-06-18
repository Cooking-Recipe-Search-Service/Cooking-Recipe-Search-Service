import { Pipe, PipeTransform } from '@angular/core';
import { declensionTitles, DECLENSION_REGEX } from '@app/consts';

@Pipe({
    name: 'declensions',
})
export class DeclensionsPipe implements PipeTransform {
    transform(title: string, num: string | number): string {
        num = num.toString();

        const titles = declensionTitles.find((el) => el.includes(title));

        if (titles) {
            if (num.match(DECLENSION_REGEX)) return titles[2];

            let count: number = Math.abs(+num) % 100;
            if (count >= 10 && count <= 20) return titles[2];

            count = Math.abs(+num) % 10;
            if (count > 1 && count < 5) return titles[1];
            if (count === 1) return titles[0];

            return titles[2];
        }

        return title;
    }
}
