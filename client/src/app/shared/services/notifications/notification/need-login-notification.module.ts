import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedLoginNotificationComponent } from './need-login-notification.component';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
    declarations: [NeedLoginNotificationComponent],
    imports: [CommonModule, TuiButtonModule],
    exports: [NeedLoginNotificationComponent],
})
export class NeedLoginNotificationModule {}
