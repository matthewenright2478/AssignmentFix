import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  value: any;
  personFour = '{"name": "Tom", "sex": "male", "age": "24"}'

  constructor() {
  }

  ngOnInit(): void {
    localStorage.clear()
    this.create("matthew")
    this.value = JSON.parse(<string>localStorage.getItem("matthew"))
    console.log(" The name is", this.value.name)
    this.retrieve("name","user")
    console.log(this.retrieve("name","user")[0])
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


}
