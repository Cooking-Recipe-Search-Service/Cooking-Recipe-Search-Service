import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeScreenComponent } from './main-home-screen.component';
import { WorldModule } from './world/world.module';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [MainHomeScreenComponent],
    imports: [
        CommonModule,
        WorldModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [MainHomeScreenComponent],
})
export class MainHomeScreenModule {}
