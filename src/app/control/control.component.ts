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

  constructor(private socket: SocketsService,private dataService: DataService,private prodService: ClientService, private router: Router) { }


  ngOnInit(): void {
    this.socket.initSocket();
    this.getProducts()

  }

  getProducts(): void {
    this.socket.getuser().subscribe(m => {
        this.rabbits = []
        this.valu =[]
        this.rabbits.push(m)
        for (let i = 0; i < this.rabbits[0].length; i++) {
          this.valu.push(this.rabbits[0][i])
        }
      })
  }




  insertProduct():void {
    this.prodService.productInsert({value: this.value, valueTwo: this.value},this.colName).subscribe(data => {
      this.getProducts()
    })
    this.getProducts()
  }

  sendMessage(){
    this.router.navigateByUrl('')
  }



  deleteProduct(product: ProdModel){
    this.socket.productDelete({value: product.value},this.colName)
    this.getProducts()
  };

  updateProduct(currentValue:any,valueNew:any){
    let current:any = {'name':currentValue}
    const neww:any = {'role':valueNew}
    this.socket.productUpdate(current,neww,this.colName)
    this.getProducts()
  }



  back():void{
    this.router.navigateByUrl('')
  }

}
