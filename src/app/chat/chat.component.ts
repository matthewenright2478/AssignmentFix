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
  roomlist = "Default";
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
  rabbits:any[]=[]
  valueMessage: object | undefined;
  valuess = {}
  valu:any[]=[]
  listArray:any[] = []
  listValue:any[] = []
  imageFull:any;
  imageName:any
  image:any;
  constructor(private dataService: DataService,private prodService: ClientService, private router: Router,private socket: SocketsService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
    this.imageName = localStorage.getItem('image')
    this.socket.initSocket();
    this.getList()
    this.getProducts()
    this.imageFull = "../../assets/" + this.imageName
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

    this.socket.getMessages(this.colName, this.channelList).subscribe(m => {
      this.rabbits = []
      this.valu = []
      this.rabbits.push(m)

      for (let i = 0; i < this.rabbits[0].length; i++) {

        this.valu.push(this.rabbits[0][i])
      }
    })
  }

  getList(): void {

    this.socket.getlist().subscribe(m => {
      this.listArray = []
      this.listValue = []
      this.listArray.push(m)

      for (let i = 0; i < this.listArray[0].length; i++) {

        this.listValue.push(this.listArray[0][i])
      }
    })
    this.colName = String(this.roomlist)
    this.getProducts()
  }

  changeChannel(){
    this.getProducts()

  }

  changeList():void {
    this.colName = String(this.roomlist)
    this.getProducts()
  }


  insertProduct():void {
    this.socket.add({value: this.value, valueTwo: this.value,user:this.user,image:this.imageName,channel:this.channelList},this.colName)
    this.getProducts()
  }


  deleteProduct(product: ProdModel){
    this.socket.productDelete({value: product.value},this.colName)
    this.getProducts()
  };


}
