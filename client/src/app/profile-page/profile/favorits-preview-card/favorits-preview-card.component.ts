import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesApiService } from 'src/app/shared/services/api/recipes-api-service.service';

@Component({
    selector: 'app-favorits-preview-card',
    templateUrl: './favorits-preview-card.component.html',
    styleUrls: ['./favorits-preview-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritsPreviewCardComponent {

  recipes$ = this.recipiesApi.getFavorits()

  constructor(private readonly recipiesApi: RecipesApiService){}

  
}
