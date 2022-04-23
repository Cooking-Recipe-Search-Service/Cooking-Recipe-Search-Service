import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    tabs = [
        {
            label: 'Расширенный поиск',
            routerLink: '/recipes/search',
            icon: '',
        },
        {
            label: 'Рецепты',
            routerLink: '/recipes',
            icon: 'assets/icons/calc.svg',
        },
        {
            label: 'О нас',
            routerLink: '',
            icon: 'tuiIconAlertCircleLarge',
        },
    ];

    activeTab = 0;
}
