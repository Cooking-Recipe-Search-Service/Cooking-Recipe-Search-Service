import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredients } from 'src/libs/interfaces';

@Component({
    selector: 'app-ingredients-search',
    templateUrl: './ingredients-search.component.html',
    styleUrls: ['./ingredients-search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsSearchComponent {
    @Input() ingredients: readonly Ingredients[] = [];

    @Input() label = '';

    @Input() control!: FormControl;

    // readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (
    //     items1,
    //     items2,
    // ) =>
    //     items1.length === items2.length &&
    //     items1.every((item) => items2.indexOf(item) !== -1);

    value = [];

    // readonly valueContent: TuiStringHandler<
    //     TuiContextWithImplicit<readonly string[]>
    // > = ({ $implicit }) => {
    //     if (!$implicit.length) {
    //         return 'All';
    //     }

    //     const selected = this.ingredients.find(({ ingredients }) =>
    //         this.identityMatcher($implicit, ingredients),
    //     );

    //     return selected
    //         ? `${selected.category} only`
    //         : `Selected: ${$implicit.length}`;
    // };
}
