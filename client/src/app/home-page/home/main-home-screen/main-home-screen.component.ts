import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-main-home-screen',
    templateUrl: './main-home-screen.component.html',
    styleUrls: ['./main-home-screen.component.less'],
})
export class MainHomeScreenComponent {
    

    recipe = new FormControl();

    searchRecipe() {
      //
    }
}
