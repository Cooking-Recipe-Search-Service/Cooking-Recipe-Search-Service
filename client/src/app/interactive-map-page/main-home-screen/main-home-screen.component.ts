import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SIZE } from 'src/libs/consts';

@Component({
    selector: 'app-main-home-screen',
    templateUrl: './main-home-screen.component.html',
    styleUrls: ['./main-home-screen.component.less'],
})
export class MainHomeScreenComponent {
    recipe = new FormControl();

    size: SIZE = 'm';

    searchRecipe() {
        //
    }
}
