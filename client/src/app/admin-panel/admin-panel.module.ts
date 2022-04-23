import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';

import { AdminPanelPageModule } from './admin-panel-page/admin-panel-page.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, AdminPanelRoutingModule, AdminPanelPageModule],
})
export class AdminPanelModule {}
