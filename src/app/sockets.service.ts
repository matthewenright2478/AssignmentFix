import { Injectable } from '@angular/core';
import io from 'socket.io-client'
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})


export class SocketsService {

  SERVER_URL = "http://localhost:3200";
  private socket: any;
  value: any
  cat: any;

  constructor() {
  }


  initSocket() {
    this.socket = io(this.SERVER_URL);


  }


  getMessages(value:any,message:any) {
    let arrayValue:any = {}
     console.log("the value isssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",value)
    arrayValue.col = value
    console.log("The value in get messages is",value)
    console.log("The value in get messages is",arrayValue)
    arrayValue.channel = message
    this.socket.emit("too", arrayValue)
    {
      return new Observable((observer) => {
        this.socket.on('data', (message: any) => {
          observer.next(message);
        });
      });

    };

  }


  getlist() {
    let arrayVal:any = {};
    arrayVal.col = "list";
    this.socket.emit("getList", arrayVal)
    {
      return new Observable((observer) => {
        this.socket.on('list', (message: any) => {
          observer.next(message);
        });
      });

    };

  }


  getuser() {
    this.socket.emit("getuser")
    {
      return new Observable((observer) => {
        this.socket.on('user', (message: any) => {
          console.log(message[0])
          console.log(message[1])
          console.log(message)
          let mess = []
          mess = message
          observer.next(mess);
        });
      });

    };

  }


  add(message:any,colName:any) {
    let arrayValue:any = {}
    arrayValue.col = colName
    arrayValue.message = message
    this.socket.emit('add',arrayValue)
  }

  send(value:any,message:any){
    let arrayValue:any = {}
    arrayValue.col = value
    arrayValue.channel = message
    console.log(" The colname is", arrayValue.channel)
    this.socket.emit('too',arrayValue)
  }


  getMessage(){
    this.socket.on('message', (message: any) => {
      console.log("The message sent is,", message)
    })
  }


  productUpdate(prodQuery:any, prodUpdate:any,colName:any) {
    const queryUpdate = {para: prodQuery, message: prodUpdate,col:colName}
    console.log("testTwo");
    this.socket.emit('update',queryUpdate)

  }

  productDelete(prod:any,colName:any) {
    console.log(prod);
    let arrayValue:any = {}
    arrayValue.message = prod
    arrayValue.col = colName
    this.socket.emit('delete',arrayValue);

  }


}
