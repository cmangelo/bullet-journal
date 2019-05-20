import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private service: LoginService, 
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.service.login({
      username: this.username,
      password: this.password
    }).subscribe(res => {
        if (res.success) {
          this.router.navigate(['/journal']);
        }
    });
  }

}
