import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel,account} from "../prodModel";
import { SocketsService } from '../sockets.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  Name:any;
  password:any;
  username:any;
  message:any;
  valuejson:any
  email:any;
  colName = "user"
  images = ['bird.jpg','cute.jpg','dolphin.jpg','fox.jpg','tiger.jpg']
  imageName:any;
  imageFull:any;
  prods!:account[];
  constructor(private socket: SocketsService,private dataService: DataService,private prodService: ClientService, private router: Router,private https:HttpClientModule) { }

  // Initiates the connection to socket and defines the message //
  ngOnInit(): void {
    this.socket.initSocket();
  this.message = "Please type in your details"
  }


  // Function that takes in the users data and inserts it into the mongoDB users collection //
  insertProduct():void {
    this.socket.add({name: this.username, email: this.email,image:this.imageName,role:"user"},this.colName)
    this.message = "Account Created"
  }

  // Goes back to the login page //
  back(){
    this.router.navigateByUrl('/login')
  }

  // Convert the selected image name into a link //
  imageChange():any {
    this.imageFull = "../../assets/" + this.imageName
    return this.imageFull
  }



}
