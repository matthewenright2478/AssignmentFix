import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  value:any;
  valueArray: any[] = []
  constructor() { }

  ngOnInit(): void {
    localStorage.clear()
    this.create("matthew")
    this.value = JSON.parse(<string>localStorage.getItem("matthew"))
    this.retrieve("name","user")
    this.createMessage("Hello","roomONe","How are you going")
  }

  create(value: any) {
    localStorage.setItem(value, JSON.stringify({type: "user", name: value, sex: "male", age: "24"}))
  }


  remove(value: any) {
    localStorage.removeItem(value)
  }


  createMessage(value:any,room:any,details:any) {
    localStorage.setItem(value, JSON.stringify({type: "message",room:room,details:details}))
  }


  createRoom(value: any) {
    localStorage.setItem(value, JSON.stringify({type: "room", name: value}))
  }



  retrieve(data: string,type:any) {
    var valueKey: any,valueAll: any, valueArray:any[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      valueKey = localStorage.key(i)
      valueAll = <string>localStorage.getItem(valueKey)
      valueAll = JSON.parse(<string>localStorage.getItem(valueKey))

      if (valueAll.type == type) {

        valueArray.push(valueAll[data])
      }
    }
    return valueArray
  }


  CHECK(value: any) {
    let result;
    for (let N = 0; N <= sessionStorage.length; N++) {
      if (value == sessionStorage.key(N)) {
        result = value
        break;
      } else {
        result = "wrong"
      }
    }
    return result
  }




  ALLJson(value: any,email:any) {
    var json = {username: value,password:email,ID:'001',ROLE:"user"}
    sessionStorage.setItem(value, JSON.stringify(json))
    this.valueArray.push(sessionStorage.getItem(value))
    console.log(" The value array is ", this.valueArray)
    return this.valueArray
  }






}
