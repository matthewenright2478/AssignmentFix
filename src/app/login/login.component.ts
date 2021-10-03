import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from "../data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private anyService: DataService,private router: Router) {}
  name:string = "okay";
  result:any
  firstName = "";
  value = ""
  password:any;
  check = ""
  key:any;
  userDetails = "hello";
  userPass:any;



  setItem(){

    this.result = this.anyService.CHECK(this.firstName)
    if (this.result != "wrong" && this.password != "wrong"){
      this.router.navigateByUrl('/chat')
      localStorage.setItem("user",this.firstName)

    }
    else{
      this.check = "WRONG"
      console.log("nothing");
    }
    if (this.result == "superadmin"){
      this.router.navigateByUrl('/chat')
      localStorage.setItem("user","superadmin")
    }

  }


  ngOnInit(): void {
  }



  getProfile():void{
    this.router.navigateByUrl('/create')
  }

  logOut():void{
    this.router.navigateByUrl('/')
  }






}
