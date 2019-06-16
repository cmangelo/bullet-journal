import { FormControl, AsyncValidatorFn, AbstractControlOptions, ValidatorFn } from '@angular/forms';

export class CustomFormControl extends FormControl {
    name: string;
    label: string;
    inputType: string;
    info: Array<string>;

    constructor(name: string, label: string, inputType: string, info?: Array<string> | null, formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
        super(formState, validatorOrOpts, asyncValidator);
        this.name = name;
        this.label = label;
        this.inputType = inputType;
        this.info = info;
    }
}