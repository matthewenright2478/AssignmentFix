import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ProdModel, account} from './prodModel'

import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'http://localhost:3000/';
  account!:account[];
  constructor(private http: HttpClient) {
  }

  productInsert(prod:any,colName:any) {
    console.log(prod);
    let arrayValue:any = {}
    arrayValue.message = prod
    arrayValue.col = colName


    this.http.post(this.url + 'products', arrayValue)
    return this.http.post(this.url + 'products', arrayValue)
  }




  productFind(colName:any) {
    let arrayValue:any = {}
    arrayValue.col = colName
    return this.http.post(this.url + 'productFind',arrayValue);
  }

  productFindChannels(colName:any,channel:any) {
    let arrayValue:any = {}
    arrayValue.col = colName
    arrayValue.channel = channel
    return this.http.post(this.url + 'productFind',arrayValue);
  }




  productUpdate(prodQuery:any, prodUpdate:any,colName:any) {
    const queryUpdate = {para: prodQuery, message: prodUpdate,col:colName}
    console.log("testTwo");
    return this.http.post(this.url + 'productUpdate', queryUpdate);
  }

  productDelete(prod:any,colName:any) {
    console.log(prod);
    let arrayValue:any = {}
    arrayValue.message = prod
    arrayValue.col = colName
    this.http.post(this.url + 'productDelete', arrayValue).subscribe(res => console.log('Done'));

  }
}
