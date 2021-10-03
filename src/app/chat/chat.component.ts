import { Component, OnInit } from '@angular/core';
import {DataService } from "../data.service";
import { FormsModule} from '@angular/forms'
import {Observable,of } from 'rxjs';
import {Router} from "@angular/router";

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


  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.Retrieve()
  }


  Retrieve(){
    this.roomArray=[]

    for(let i = 0; i < this.dataService.retrieve("name","room").length;i++) {
      this.roomArray.push(this.dataService.retrieve("name", "room")[i])
    }

  }


  createRoom(){
    this.dataService.createRoom(this.roomCreate)
    this.Retrieve()
  }


  sendMessage(){
    this.dataService.createMessage(this.roomSend,this.roomSend,this.roomName)
  }


  logOut():void{
    this.router.navigateByUrl('/login')
  }


 // getMessages(){

  //  this.dataService.retrieve()
  //}



}
