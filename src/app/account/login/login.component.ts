import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private service: AccountService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.service.login({
      email: this.email,
      password: this.password
    }).subscribe(res => {
      this.router.navigate(['/journal']); //maybe move this to ngrx effects?

    });
  }

}
