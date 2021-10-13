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


  prods!:any;
  value:any;
  test:any[] = []
  colName:any = "list"
  listArray:any[] = []
  listValue:any[] = []
  constructor(private socket: SocketsService, private prodService: ClientService, private router: Router) { }


  ngOnInit(): void {
    this.socket.initSocket();
    this.getProducts();
  }

  getProducts(): void {

    this.socket.getlist().subscribe(m => {
      while(this.listArray.length) {
        this.listArray.pop();
      }
      while(this.listValue.length){
        this.listValue.pop();
      }
      this.listArray.push(m)
      console.log(m)
      console.log("This list message is", this.listArray[0].length)
      for (let i = 0; i < this.listArray[0].length; i++) {

        this.listValue.push(this.listArray[0][i])
      }
    })
  }

  sendMessage(){
    this.router.navigateByUrl('')
  }



  insertProduct():void {
    this.socket.add({value: this.value, valueTwo: this.value},this.colName)
    this.getProducts()
  }


  deleteProduct(product: ProdModel){
    this.socket.productDelete({value: product.value},this.colName)
    this.getProducts()
  };
  updateProduct(product: ProdModel[]){
    localStorage.removeItem('product');
    // @ts-ignore
    delete product._id;
    localStorage.setItem('product',JSON.stringify(product));

  }


}

