import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName = null;
  sub: Subscription;
  constructor(public userSer: LoginService) {
    this.sub = this.userSer.currentUser.subscribe(succ => {
      this.userName = this.userSer.getFromStorage() ? this.userSer.getFromStorage().Name : "guest";
      console.log("from subscribe")
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
  }
}
