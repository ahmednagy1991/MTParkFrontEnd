import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service'
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  constructor(private notifier: NotifierService,private router: Router, public auth_service: AuthService) { }

  login() {
    debugger;
    this.auth_service.login(this.username, this.password).then((res) => {
      if (res) {
        this.router.navigateByUrl('/dashboard');
      }
      else {
        this.error = "Please check username or password";
      }
    }).catch((err)=>{
      this.notifier.notify("error", err);
    });

  }
  ngOnInit() {
  }

}
