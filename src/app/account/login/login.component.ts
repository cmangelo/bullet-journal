import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountFacade } from '../+state/account.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private facade: AccountFacade,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.facade.login(this.email, this.password);
  }

}
