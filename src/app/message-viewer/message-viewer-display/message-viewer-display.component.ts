import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Message} from '../message-model';

@Component({
  selector: 'app-message-viewer-display',
  templateUrl: './message-viewer-display.component.html',
  styleUrls: ['./message-viewer-display.component.css']
})
export class MessageViewerChildComponent implements OnInit, OnChanges {

  @Input() messages: Message[];
  private starredCount = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleButton(message: Message) {
    message.isStarred = !message.isStarred;
    this.getStarredCount();
  }

  getStarredCount() {
    if (this.messages) {
      this.starredCount = this.messages.filter((msg) => {
        return msg.isStarred;
      }).length;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['messages']) {
      this.getStarredCount();
    }
  }

}
