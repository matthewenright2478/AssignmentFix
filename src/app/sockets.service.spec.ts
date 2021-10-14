import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SocketsService } from './sockets.service';

describe('SocketsService', () => {
  let service: SocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule]
    });
    service = TestBed.inject(SocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
