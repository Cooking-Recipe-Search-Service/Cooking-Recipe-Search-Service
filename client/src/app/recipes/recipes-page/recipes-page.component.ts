import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent{

}
