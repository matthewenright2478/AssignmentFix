import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel,account} from "../prodModel";
import { SocketsService } from '../sockets.service'

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  url = "http:/localhost:3200";

  roomName: any;

  roomCreate: any;
  messageValues:any[]=[]
  nameArray:any[]=[];
  mess:any;
  checkROLE:any;
  roomArray:any[]=[];
  colName = 'user'
  prods!:any;
  roomlist:any;
  value:any;
  role:any[] = []
  listName = 'list'
  listDBS!:ProdModel[];
  user:any;
  valuess = {}
  valu:any[]=[]
  rabbits:any[]=[]
  testing:any;

  constructor(private socket: SocketsService,private dataService: DataService,private prodService: ClientService, private router: Router) { }

// Initiates when the server starts. Starts the connection to the socket using the method this.socket.InitSocket, and retrieves the data using this.getProducts function //
  ngOnInit(): void {
    this.socket.initSocket();
    this.getProducts()
  }

   // Receives the data about the list of users from this.socket.getuser method within the socket server //
  getProducts(): void {
    this.socket.getuser().subscribe((m:any)=> {
        this.testing = m })
  }


  // This function uses the method from socket service called socket.product Delete. This deletes the selected value //
  deleteProduct(product: ProdModel){
    this.socket.productDelete({value: product.value},this.colName)
    this.getProducts()
  };

  // This function uses the method from socket service called this.socket.productUpdate were it updates the desired data by sending the new name and role into this method. //
  updateProduct(currentValue:any,valueNew:any){
    let current:any = {'name':currentValue}
    const neww:any = {'role':valueNew}
    this.socket.productUpdate(current,neww,this.colName)
    this.getProducts()
  }

  // This function is used to go back to the chat page using the method this.router.navigateUrl() //
  back():void{
    this.router.navigateByUrl('')}
}
