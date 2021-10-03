import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel} from "../prodModel";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  url = "http:/localhost:3200";
  messagecontent: string = "";
  messages: string[] = [];
  roomName: any;
  roomSend: any;
  roomCreate: any;
  messageValues:any[]=[]
  nameArray:any[]=[];
  mess:any;
  checkROLE:any;
  manageMessage:any;
  roomArray:any[]=[];
  colName = 'list'
  prods!:any;
  roomlist:any;
  value:any;
  role:any;
  listName = 'list'
  listDBS!:any;


  constructor(private dataService: DataService,private prodService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.getList()
  }



  createRoom(){
    this.router.navigateByUrl('/admin')
  }


  sendMessage(){
    this.router.navigateByUrl('/control')
  }


  logOut():void{
    this.router.navigateByUrl('/login')
  }


  getProducts(): void {
    this.prodService.productFind(this.colName).subscribe(data => {
      this.prods = data;
    })
  }

  getList(): void {
    this.prodService.productFind(this.listName).subscribe(data => {
      this.listDBS = data;
    })
  }

  changeList():void {
    this.colName = String(this.roomlist)
    this.getProducts()
  }



  insertProduct():void {
    this.prodService.productInsert({value: this.value, valueTwo: this.value},this.colName).subscribe(data => {
      this.getProducts()

    })
    this.getProducts()
  }


  deleteProduct(product: ProdModel){
    this.prodService.productDelete({value: product.value},this.colName)
    this.getProducts()
  };

  updateProduct(product: ProdModel[]){
    localStorage.removeItem('product');
    // @ts-ignore
    delete product._id;
    localStorage.setItem('product',JSON.stringify(product));

  }

}
