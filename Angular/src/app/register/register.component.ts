import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import User from '../models/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
temp="gbg" 
  constructor(public myActive:ActivatedRoute,public userSer:LoginService, public router:Router) { 
  this.myActive.params.subscribe((pa)=>{this.temp=pa['name']})
  }

  ngOnInit(): void {
  }

  addUser(name:string,address:string,mail:string,password:string){

let user1:User={Name:name ,Address:address,Mail: mail,Password:password}
   this.userSer.register(user1).subscribe((newUser:any)=> {
  console.log(newUser);
  
  if (newUser==false) 
  alert(" כבר קים שם משתמש וסיסמא אלו");
  else if (newUser==true) alert("סיסמא קיימת ,בחר סיסמא אחרת");
  else { this. userSer.saveInStorage(newUser)
    this.userSer.currentUser.next(newUser);
  }

 
 
});



  }
}
