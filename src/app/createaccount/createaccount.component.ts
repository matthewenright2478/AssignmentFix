import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel,account} from "../prodModel";
import { SocketsService } from '../sockets.service'

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  Name:any;
  password:any;
  username:any;
  valuejson:any
  email:any;
  colName = "user"
  images = ['bird.jpg','cute.jpg','dolphin.jpg','fox.jpg','tiger.jpg']
  imageName:any;
  imageFull:any;
  prods!:account[];
  constructor(private socket: SocketsService,private dataService: DataService,private prodService: ClientService, private router: Router) { }


  ngOnInit(): void {

  }

  insertProduct():void {
    this.socket.add({name: this.username, email: this.email,image:this.imageName,role:"user"},this.colName)

  }

  change(){
    this.router.navigateByUrl('/login')
  }


  imageChange(){
    this.imageFull = "../../assets/" + this.imageName
  }

}
