import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ClientService } from '../client.service'
import {ProdModel} from "../prodModel";


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
  constructor(private prodService: ClientService, private router: Router) { }


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

  updateProduct(product: ProdModel[]){
    localStorage.removeItem('product');
    // @ts-ignore
    delete product._id;
    localStorage.setItem('product',JSON.stringify(product));

  }


}

