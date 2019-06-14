import { FormControl, AsyncValidatorFn, AbstractControlOptions, ValidatorFn } from '@angular/forms';

export class CustomFormControl extends FormControl {
    label: string;
    title: string;
    inputType: string;
    info: Array<string>;

    constructor(label: string, title: string, inputType: string, info?: Array<string> | null, formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
        super(formState, validatorOrOpts, asyncValidator);
        this.label = label;
        this.title = title;
        this.inputType = inputType;
        this.info = info;
    }
}