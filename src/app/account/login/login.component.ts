import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AccountFacade } from '../+state/account.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  error$ = this.facade.error$;
  loading$ = this.facade.loading$;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private facade: AccountFacade) { }

  ngOnInit() {
  }

  submit() {
    this.facade.login(this.loginForm.value);
  }

  clearError() {
    this.facade.clearError();
  }

}
