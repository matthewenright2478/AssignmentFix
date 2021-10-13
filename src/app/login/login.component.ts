import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel,account} from "../prodModel";
import { SocketsService } from '../sockets.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private socket: SocketsService,private dataService: DataService,private prodService: ClientService, private router: Router) { }
  firstName = "";
  check = ""
  colName = 'user'
  prods!:any;
  email:any;
  valu:any[]=[]
  rabbits:any[]=[]


  ngOnInit(): void {
    this.socket.initSocket();
    this.getProducts()

  }

  getProducts(): void {
    this.socket.getuser().subscribe(m => {
      this.rabbits = []
      this.valu = []
      this.rabbits.push(m)
      for (let i = 0; i < this.rabbits[0].length; i++) {
        this.valu.push(this.rabbits[0][i])
      }
    })
  }


  getProfile():void{
    this.router.navigateByUrl('/create')
  }

  logOut():void{
    this.router.navigateByUrl('/')
  }


 checking(){
    for (let i=0;i < this.valu.length; i++){
      if (this.valu[i].name == this.firstName && this.valu[i].email == this.email){
        this.router.navigateByUrl('')
        localStorage.user = this.firstName
        console.log(this.valu[i].image)
        localStorage.image = this.valu[i].image

      }
    }
 }


}
