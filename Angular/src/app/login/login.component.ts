import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import User from '../models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public userSer: LoginService, public router: Router) { }
  tempname = ""
  user: any = new User("", "", "", "", 0)
  ngOnInit(): void {
  }
  check(name: string, passward: string) {
    this.userSer.login(name, passward).subscribe((x: any) => {
      console.log(x);
      if (x == false)
        this.router.navigate(['register', name]);
      else if (x == true) alert("סיסמא שגויה");
      else {
        this.user.Name = name
        this.user.Password = passward
        this.userSer.saveInStorage(this.user)
        this.userSer.currentUser.next(this.user);
        this.router.navigate(["/recipies"])
      }
    });
  }
}
