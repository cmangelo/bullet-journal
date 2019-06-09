import { Component, OnInit } from '@angular/core';

import { AccountFacade } from '../+state/account.facade';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordUppercaseValidator } from 'src/app/shared/form-validators/password-uppercase.validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent implements OnInit {
  email: string;
  name: string;
  password: string;
  createAccountForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
      passwordUppercaseValidator()
    ])
  });


  constructor(private facade: AccountFacade) { }

  ngOnInit() {
  }

  submit() {
    // this.facade.createAccount(this.name, this.email, this.password);
    console.log(this.createAccountForm.value)
  }

}
