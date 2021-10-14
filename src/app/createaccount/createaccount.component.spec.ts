import { ComponentFixture, inject, async, TestBed } from '@angular/core/testing';
import {DataService } from "../data.service";
import {ClientService} from "../client.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SocketsService } from '../sockets.service'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateaccountComponent } from './createaccount.component';
import { BrowserModule } from '@angular/platform-browser';





describe('CreateaccountComponent', () => {
  let component: CreateaccountComponent;
  let fixture: ComponentFixture<CreateaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateaccountComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
      providers: [SocketsService, DataService, ClientService, HttpClient, BrowserModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  ;



  // Tests the function imageChange() //
  describe("Testing image", function () {
    it("Should combine the text of the link and the image name", async () => {
        const fixture = TestBed.createComponent(CreateaccountComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        let imageName = app.imageName
        expect(app.imageChange()).toEqual( "../../assets/" + imageName)
      }
    )
  })

})
