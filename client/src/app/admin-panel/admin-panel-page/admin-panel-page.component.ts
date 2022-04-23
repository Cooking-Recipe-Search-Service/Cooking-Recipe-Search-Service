import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-admin-panel-page',
    templateUrl: './admin-panel-page.component.html',
    styleUrls: ['./admin-panel-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPanelPageComponent {
    activeItemIndex = 0;

    tabs: { id: string; name: string }[] = [
        {
            id: 'ingredient',
            name: 'Добавить ингредиент',
        },
        {
            id: 'recipe',
            name: 'Добавить рецепт',
        },
    ];

    constructor(private scroller: ViewportScroller) {}

    onClick(activeElement: { id: string; name: string }): void {
        this.activeItemIndex = this.tabs.indexOf(activeElement);
        this.scroller.scrollToAnchor(activeElement.id);
    }
}
