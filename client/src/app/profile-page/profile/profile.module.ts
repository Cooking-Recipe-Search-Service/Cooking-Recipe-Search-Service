import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { TuiIslandModule, TuiTabsModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { FavoritsPreviewCardModule } from './favorits-preview-card/favorits-preview-card.module';
import { ProfileInfoCardModule } from './profile-info-card/profile-info-card.module';
import { FavoritsPageModule } from './favorits-page/favorits-page.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        TuiTabsModule,
        TuiSvgModule,
        TuiIslandModule,
        FavoritsPreviewCardModule,
        ProfileInfoCardModule,
        FavoritsPageModule,
    ],
    exports: [ProfileComponent],
})
export class ProfileModule {}
