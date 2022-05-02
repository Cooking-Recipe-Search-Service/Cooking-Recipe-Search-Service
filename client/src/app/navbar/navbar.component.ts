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
            label: 'Рецепты',
            routerLink: '/recipes',
            icon: 'assets/icons/recipes.svg',
        },
        {
            label: 'Admin panel',
            routerLink: '/admin-panel',
            icon: 'tuiIconLockLarge',
        },
        {
            label: 'Профиль',
            routerLink: '/profile',
            icon: 'tuiIconUser',
        },
    ];

    activeTab = 0;
}
