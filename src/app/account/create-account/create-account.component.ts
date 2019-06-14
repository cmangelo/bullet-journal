import { Component, OnInit } from '@angular/core';

import { AccountFacade } from '../+state/account.facade';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordUppercaseValidator } from 'src/app/shared/form-validators/password-uppercase.validator';
import { CustomFormControl } from 'src/app/shared/classes/CustomFormControl';

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
      null,
      '',
      [Validators.minLength(6), Validators.required, passwordUppercaseValidator()])
  });

  constructor(private facade: AccountFacade) { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form)
    this.facade.createAccount(form.value);
  }

  clearError() {
    this.facade.clearError();
  }
}
