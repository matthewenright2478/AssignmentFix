import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from "../data.service";
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  Name:any;
  password:any;
  username:any;
  AGE:any;
  testTwo:any;
  message:any;
  testing:any[] = []
  testingTwo:any;
  testingThree:any;
  testingFour:any;
  valuejson:any
  email:any;
  constructor(private anyService: DataService,private router: Router) {}


  change(){
    //this.bookService.changeUsername(this.username);
    //this.bookService.changePassword(this.password);
    this.router.navigateByUrl('/login')
  }

  ACTIVATE(){


    this.anyService.ALLJson(this.username,this.email)
    console.log(" The key is ", <string>sessionStorage.key(1))
    this.valuejson = JSON.parse(<string>sessionStorage.getItem(<string>sessionStorage.key(1)))
    console.log(" Teh value json is", JSON.stringify(this.valuejson.username))
    this.valuejson = JSON.stringify(this.valuejson.username)

    console.log("The test four is ", JSON.parse(this.valuejson.username))
    this.testingFour = this.valuejson.username
    console.log("The test four is ", this.testingFour)
    this.message = "The username " + this.username + " has been created"
  }

}
