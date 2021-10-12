import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel} from "../prodModel";
import { SocketsService } from '../sockets.service'

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
  colName = 'Default'
  prods!:any;
  roomlist:any;
  value:any;
  role:any;
  listName = 'list'
  listDBS!:any;
  user:any;
  channels = ["1","2","3","4","5","6","7","8","9","10"]
  channelList:any="1"
  testSocketsObject:any;
  testSocketsData:any;
  valueResult:any
  type:any;

  valueMessage:any;
  valuess:any[] = [];




  constructor(private dataService: DataService,private prodService: ClientService, private router: Router,private socket: SocketsService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
    this.colName='Default'
    this.getList()
    this.socket.initSocket();
    this.getProducts()
    this.socket.getMessages().subscribe(m => {
      this.valueMessage = m
      this.valuess.push(m);})
    this.socket.createChannel("RoomONe")
    //this.socket.send("too")
    this.socket.getMessage()

    let arrayValue:any = {}
    this.colName

    this.channelList
    this.socket.send("too", this.colName, this.channelList)
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
    this.prodService.productFindChannels(this.colName,this.channelList).subscribe(data => {
      this.prods = data;
    })
  }

  getList(): void {
    this.prodService.productFind(this.listName).subscribe(data => {
      this.listDBS = data;
    })
  }

  changeChannel(){
    this.getProducts()
  }

  changeList():void {
    this.colName = String(this.roomlist)
    this.getProducts()
  }



  insertProduct():void {
    this.prodService.productInsert({value: this.value, valueTwo: this.value,user:this.user,channel:this.channelList},this.colName).subscribe(data => {
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
