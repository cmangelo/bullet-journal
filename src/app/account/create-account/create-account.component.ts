import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CustomFormControl } from 'src/app/shared/classes/CustomFormControl';
import { passwordUppercaseValidator } from 'src/app/shared/form-validators/password-uppercase.validator';

import { AccountFacade } from '../+state/account.facade';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent implements OnInit {
  error$ = this.facade.error$;
  loading$ = this.facade.loading$;
  createAccountForm = new FormGroup({
    firstName: new CustomFormControl(
      'firstName',
      'First Name',
      'text',
      null,
      '',
      Validators.required),
    lastName: new CustomFormControl(
      'lastName',
      'Last Name',
      'text',
      null,
      ''),
    email: new CustomFormControl(
      'email',
      'Email',
      'email',
      null,
      '',
      [Validators.email, Validators.required]),
    password: new CustomFormControl(
      'password',
      'Password',
      'password',
      ['At least 6 characters', 'At least one capital letter'],
      '',
      [Validators.minLength(6), Validators.required, passwordUppercaseValidator()])
  });

  constructor(private facade: AccountFacade) { }

  ngOnInit() {
  }

  submit(form: FormGroup) {
    this.facade.createAccount(form.value);
  }

  clearError() {
    this.facade.clearError();
  }
}
