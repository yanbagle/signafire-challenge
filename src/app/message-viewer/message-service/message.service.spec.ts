import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { MessageService } from './message.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MESSAGE_COLLECTION} from '../message-mocks/message-mock';

describe('MessageViewerComponent', () => {

  const url = 'http://localhost:3000/messages';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule,
                 HttpClientTestingModule ],
      providers: [ MessageService ]
    })
      .compileComponents();
  }));

  it(`should be created`, inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it(`should get the messages`, async(inject([MessageService, HttpTestingController],
    (service: MessageService, httpMock: HttpTestingController) => {

    service.getMessages()
        .subscribe(data => expect(data).toEqual(MESSAGE_COLLECTION));

      const req = httpMock.expectOne(url);
      expect(req.request.method).toEqual('GET');
      req.flush(MESSAGE_COLLECTION);

      httpMock.verify();
    }))
  );

});
