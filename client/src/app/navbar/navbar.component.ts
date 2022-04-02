import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAVBAR_TABS } from 'src/libs/consts';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    tabs = NAVBAR_TABS;

    activeItemIndex = -1;
}
