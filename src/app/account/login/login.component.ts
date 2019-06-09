import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AccountFacade } from '../+state/account.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('')
  });

  constructor(private facade: AccountFacade) { }

  ngOnInit() {
  }

  submit() {
    // this.facade.login(this.email, this.password);
  }

}
