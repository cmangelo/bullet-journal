import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordUppercaseValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const containsUppercase = control.value.toLowerCase() !== control.value;
        return !containsUppercase ? { 'missingUppercase': { value: control.value } } : null;
    }
}