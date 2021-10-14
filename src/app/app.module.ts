import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    AdminComponent,
    CreateaccountComponent,
    ControlComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
