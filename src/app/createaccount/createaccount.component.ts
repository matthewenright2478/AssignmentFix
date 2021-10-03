import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel,account} from "../prodModel";

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

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
  value:any;
  colName = "user"
  prods!:account[];
  constructor(private dataService: DataService,private prodService: ClientService, private router: Router) { }


  ngOnInit(): void {

  }


  insertProduct():void {
    console.log("success")
    this.prodService.productInsert({name: this.username, email: this.email,role:"user"},this.colName).subscribe(data => {

    })

  }

  change(){
    //this.bookService.changeUsername(this.username);
    //this.bookService.changePassword(this.password);
    this.router.navigateByUrl('/login')
  }


}
