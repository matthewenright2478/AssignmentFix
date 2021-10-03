import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import {ChatComponent} from "./chat/chat.component";
import {LoginComponent} from "./login/login.component";
import {CreateaccountComponent} from "./createaccount/createaccount.component";
import {AdminComponent} from "./admin/admin.component";

const routes:Routes = [{path:"create",component: CreateaccountComponent},{path:"",component: ChatComponent},{path:"login",component: LoginComponent},
  {path:"admin",component: AdminComponent}]



@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
