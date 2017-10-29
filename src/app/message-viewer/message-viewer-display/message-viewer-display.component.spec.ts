import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageViewerDisplayComponent } from './message-viewer-display.component';
import {FormsModule} from '@angular/forms';
import {MESSAGE_COLLECTION} from '../message-mocks/message-mock';

describe('MessageViewerDisplayComponent', () => {
  let component: MessageViewerDisplayComponent;
  let fixture: ComponentFixture<MessageViewerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageViewerDisplayComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageViewerDisplayComponent);
    component = fixture.componentInstance;
    component.messages = MESSAGE_COLLECTION;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get starred msg count', () => {
    component.getStarredCount();
    expect(component.starredCount).toBe(3);
  });

  it('should toggle star button', () => {
    spyOn(component, 'getStarredCount');
    component.toggleStarButton(MESSAGE_COLLECTION[0]);
    expect(component.getStarredCount).toHaveBeenCalled();
    expect(component.messages[0].isStarred).toBe(MESSAGE_COLLECTION[0].isStarred);
  });

  it('should filter by string', () => {
    component.filterString = 'dolores';
    component.filterByStr();
    expect(component.filteredMsgs[0].id).toBe(MESSAGE_COLLECTION[0].id);
  });

  it('should filter messages', () => {
    component.filter = 'all';
    component.filterMsg();
    expect(component.filteredMsgs).toBe(component.messages);

    component.filter = 'starred';
    component.filterMsg();
    expect(component.filteredMsgs.length).toBe(2);
    expect(component.filteredMsgs[0]).toBe(component.messages[3]);

    component.filter = 'notStarred';
    component.filterMsg();
    expect(component.filteredMsgs.length).toBe(3);
    expect(component.filteredMsgs[0]).toBe(component.messages[0]);
  });

});
