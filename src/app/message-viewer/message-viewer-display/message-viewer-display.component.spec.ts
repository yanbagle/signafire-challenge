import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageViewerChildComponent } from './message-viewer-display.component';

describe('MessageViewerChildComponent', () => {
  let component: MessageViewerChildComponent;
  let fixture: ComponentFixture<MessageViewerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageViewerChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageViewerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
