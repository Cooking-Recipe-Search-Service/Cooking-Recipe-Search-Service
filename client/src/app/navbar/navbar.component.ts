import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Tab } from 'src/libs/interfaces';

export const RECIPES_NAVBAR_INVEX = 0;
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    recipes = [
        {
            label: 'Расширенный поиск',
            routerLink: '/recipes/search',
            icon: '',
        },
        {
            label: 'Салаты',
            routerLink: '/recipes/salads',
            icon: '',
        },
        {
            label: 'Завтраки',
            routerLink: '/recipes/breakfasts',
            icon: '',
        },
        {
            label: 'Сэндвичи',
            routerLink: '/recipes/sandwiches',
            icon: '',
        },
        {
            label: 'Выпечка',
            routerLink: '/recipes/bakery',
            icon: '',
        },
    ];

    tabs = [
        this.recipes,
        {
            label: 'Посчитать каллории',
            routerLink: '/calc-calories',
            icon: 'assets/icons/calc.svg',
        },
        {
            label: 'О нас',
            routerLink: '',
            icon: 'tuiIconAlertCircleLarge',
        },
    ];

    activeTab = 0;

    opened = false;

    constructor(
        private readonly router: Router,
        private readonly location: Location,
    ) {
        const path = this.location.path();
        this.tabs.forEach((tab, index) => {
            if (this.isTab(tab) && path.includes(tab.routerLink))
                this.activeTab = index;
            if (path.includes('recipes')) this.activeTab = RECIPES_NAVBAR_INVEX;
        });
        this.router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd,
                ),
            )
            .forEach((event) => {
                if (event.url.includes('recipes')) {
                    this.activeTab = RECIPES_NAVBAR_INVEX;
                }
            });
    }

    stop(event: Event): void {
        event.stopPropagation();
    }

    isTab(tab: Tab | readonly Tab[]): tab is Tab {
        return !Array.isArray(tab);
    }

    onClick(): void {
        this.opened = false;
    }

    preventRouting(): string {
        if (!this.location.path().includes('/recipes')) {
            return '/recipes';
        } else return this.location.path();
    }
}
