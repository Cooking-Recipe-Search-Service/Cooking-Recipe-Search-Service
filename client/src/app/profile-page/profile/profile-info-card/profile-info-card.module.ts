import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoCardComponent } from './profile-info-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
    declarations: [ProfileInfoCardComponent],
    imports: [CommonModule, TuiIslandModule, TuiButtonModule],
    exports: [ProfileInfoCardComponent],
})
export class ProfileInfoCardModule {}
