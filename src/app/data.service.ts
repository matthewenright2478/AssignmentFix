import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  person:any = {"name": "Tom", "sex": "male", "age": "24"}
  constructor() { }

ngOnInit() {
  console.log(" Teh type of is",typeof(this.person))
  console.log(" Teh type of is")
}

}
