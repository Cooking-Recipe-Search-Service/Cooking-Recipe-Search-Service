import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedLoginNotificationModule } from './notification/need-login-notification.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, NeedLoginNotificationModule],
})
export class NotificationServiceModule {}
