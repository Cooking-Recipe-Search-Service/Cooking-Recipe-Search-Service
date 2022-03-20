import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-img-with-subtitle',
    templateUrl: './img-with-subtitle.component.html',
    styleUrls: ['./img-with-subtitle.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgWithSubtitleComponent {
    @Input() img = '';

    @Input() title = '';
}
