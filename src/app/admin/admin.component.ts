import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ClientService } from '../client.service'
import {ProdModel} from "../prodModel";
import { SocketsService } from '../sockets.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  value:any;
  colName:any = "list"
  listValue:any[] = []
  constructor(private socket: SocketsService, private prodService: ClientService, private router: Router) { }

  //Used when the server initiates//
  ngOnInit(): void {
    this.socket.initSocket();
    this.getProducts();
  }

  // A function that uses sockets.getList() to retrieve the list of rooms from the MongoDB collection of list //
  getProducts(): void {
      this.socket.getlist().subscribe((m:any) => {
      this.listValue = m})
  }

  // Used to navigate to the chat page. Uses the this.routernavigateByUrl(‘’) method//
  sendMessage(){
    this.router.navigateByUrl('')
  }

   // Uses the method this.socket.add() to add a new room //
  insertProduct():void {
    this.socket.add({value: this.value, valueTwo: this.value},this.colName)
    this.getProducts()
  }

 // This function uses the method from socket service called socket.product Delete.This deletes the selected value //
  deleteProduct(product: ProdModel){
    this.socket.productDelete({value: product.value},this.colName)
    this.getProducts()
  };


}

