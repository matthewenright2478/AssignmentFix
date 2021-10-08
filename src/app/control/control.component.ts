import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProdModel,account} from "../prodModel";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

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
  colName = 'user'
  prods!:any;
  roomlist:any;
  currentValue:any;
  newValue:any;
  value:any;
  role:any[] = []
  listName = 'list'
  listDBS!:ProdModel[];
  user:any;

  constructor(private dataService: DataService,private prodService: ClientService, private router: Router) { }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.prodService.productFind(this.colName).subscribe(data => {
      this.prods = data;
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
    this.prodService.productDelete({value: product.value},this.colName)
    this.getProducts()
  };

  updateProduct(currentValue:any,valueNew:any){
    let current:any = {'name':currentValue}
    const neww:any = {'role':valueNew}

    this.prodService.productUpdate(current,neww,this.colName).subscribe(data => {
      console.log(data)
      this.getProducts()

  })
    this.getProducts()
  }

  upProduct(){
    let current:any = {'name':'cat'}
    const neww:any = {'role':'superadmin'}
    console.log("test")
    this.prodService.productUpdate(current,neww,this.colName).subscribe(data => {
      console.log(data)

    })
    this.getProducts()
  }





  back():void{
    this.router.navigateByUrl('')
  }

}
