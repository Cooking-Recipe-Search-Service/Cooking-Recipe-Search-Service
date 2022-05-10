import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedLoginNotificationComponent } from './need-login-notification.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NeedLoginNotificationComponent],
    imports: [CommonModule, TuiButtonModule,RouterModule],
    exports: [NeedLoginNotificationComponent],
})
export class NeedLoginNotificationModule {}
