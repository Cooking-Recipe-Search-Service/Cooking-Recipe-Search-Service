import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/api/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    activeItemIndex = 0;

    recipes$ = this.authService.getFavorits();

    constructor(
        private router: Router,
        private readonly authService: AuthService,
    ) {}

    navigate(index: number): void {
        this.activeItemIndex = index;
    }
}
