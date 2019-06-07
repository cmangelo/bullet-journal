import { Component, OnInit } from '@angular/core';

import { AccountFacade } from '../+state/account.facade';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent implements OnInit {
  email: string;
  name: string;
  password: string;

  constructor(private facade: AccountFacade) { }

  ngOnInit() {
  }

  submit() {
    this.facade.createAccount(this.name, this.email, this.password);
  }

}
