import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageViewerComponent } from './message-viewer.component';
import {MessageService} from './message-service/message.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Message} from './message-model';
import {MESSAGE_COLLECTION} from './message-mocks/message-mock';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

class MockMessageService {
  getMessages(): Observable<Message[]> {
    return Observable.of(MESSAGE_COLLECTION);
  }
}

describe('MessageViewerComponent', () => {
  let component: MessageViewerComponent;
  let fixture: ComponentFixture<MessageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ MessageViewerComponent ],
      providers: [{provide: MessageService, useClass: MockMessageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.messages).toBe(MESSAGE_COLLECTION);
  });
});
