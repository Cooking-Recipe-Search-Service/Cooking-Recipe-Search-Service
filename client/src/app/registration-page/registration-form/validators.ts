import { AbstractControl, ValidatorFn } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';

export function length(num: number): ValidatorFn {
    return (field: AbstractControl) => {
        return field.value && field.value.length >= num
            ? null
            : {
                  length: new TuiValidationError(
                      'Длинна должна быть не меньше 3-х симвлов',
                  ),
              };
    };
}
