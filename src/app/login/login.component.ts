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

// Initialises the connection to the socket and then gets the user data //
  ngOnInit(): void {
    this.socket.initSocket();
    this.getProducts()
  }

  // Get the User data //
  getProducts(): void {
    this.socket.getuser().subscribe((m:any) => {
      this.valu = m
      })
  }

 // Takes the user to the profile page
  getProfile():void{
    this.router.navigateByUrl('/create')
  }

  // Takes the User to the chat page //
  logOut():void{
    this.router.navigateByUrl('/')
  }

 // Checks to see if the credentials are correct //
 checking(){
    for (let i=0;i < this.valu.length; i++){
      if (this.valu[i].name == this.firstName && this.valu[i].email == this.email){
        this.router.navigateByUrl('')
        localStorage.user = this.firstName
        localStorage.image = this.valu[i].image
      }
    }
 }


}
