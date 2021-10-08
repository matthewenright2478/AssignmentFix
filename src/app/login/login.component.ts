import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel,account} from "../prodModel";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private dataService: DataService,private prodService: ClientService, private router: Router) { }
  firstName = "";
  check = ""
  colName = 'user'
  prods!:any;
  email:any;



  ngOnInit(): void {
    this.getProducts()
  }



  getProfile():void{
    this.router.navigateByUrl('/create')
  }

  logOut():void{
    this.router.navigateByUrl('/')
  }


  getProducts(): void {
    this.prodService.productFind(this.colName).subscribe(data => {
      this.prods = data;
    })
  }

 checking(){
    for (let i=0;i < this.prods.length; i++){
      if (this.prods[i].name == this.firstName && this.prods[i].email == this.email){
        this.router.navigateByUrl('')
        localStorage.user = this.firstName


      }
    }
 }


}
