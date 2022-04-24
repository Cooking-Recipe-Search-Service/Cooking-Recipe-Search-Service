import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Recipe } from 'src/libs/interfaces';

@Component({
    selector: 'app-img-with-subtitle',
    templateUrl: './img-with-subtitle.component.html',
    styleUrls: ['./img-with-subtitle.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgWithSubtitleComponent {
    @Input() recipe!: Recipe;
}
