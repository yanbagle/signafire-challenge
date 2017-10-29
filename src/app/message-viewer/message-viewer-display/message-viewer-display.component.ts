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
  private filter = 'all';
  private filteredMsgs: Message[];

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

  filterMsg() {
    switch (this.filter) {
      case 'all':
        this.filteredMsgs = this.messages;
        break;
      case 'starred':
        this.filteredMsgs = this.messages.filter((msg) => {
          return msg.isStarred;
        });
        break;
      case 'notStarred':
        this.filteredMsgs = this.messages.filter((msg) => {
          return !msg.isStarred;
        });
        break;
      default:
        console.log('Invalid filter');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['messages']) {
      this.filteredMsgs = this.messages;
      this.getStarredCount();
    }
    if (changes['filter']) {

    }
  }

}
