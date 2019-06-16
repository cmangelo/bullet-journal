import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { AccountFacade } from '../+state/account.facade';
import { CustomFormControl } from '../../shared/classes/CustomFormControl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  error$ = this.facade.error$;
  loading$ = this.facade.loading$;
  loginForm = new FormGroup({
    email: new CustomFormControl(
      'email',
      'Email',
      'email',
      null,
      '',
      Validators.required),
    password: new CustomFormControl(
      'password',
      'Password',
      'password',
      null,
      '',
      Validators.required)
  });

  constructor(private facade: AccountFacade) { }

  ngOnInit() {
  }

  submit(form: FormGroup) {
    this.facade.login(form.value);
  }

  clearError() {
    this.facade.clearError();
  }

}
