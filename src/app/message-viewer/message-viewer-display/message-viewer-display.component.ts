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
  private filterString = '';

  constructor() { }

  ngOnInit() {
  }

  toggleStarButton(message: Message) {
    message.isStarred = !message.isStarred;
    // re-count starred messages
    this.getStarredCount();
  }

  getStarredCount() {
    if (this.messages) {
      this.starredCount = this.messages.filter((msg) => {
        return msg.isStarred;
      }).length;
    }
  }

  // filter messages by string, this will ignore current toggle filter
  filterByStr() {
    this.filteredMsgs = this.messages.filter((msg) => {
      return msg.content.toLowerCase().includes(this.filterString);
    });
  }

  // filter messages based on toggle
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
    // messages from service coming in from parent comp
    if (changes['messages']) {
      this.filteredMsgs = this.messages;
      // get initial starred count
      this.getStarredCount();
    }
  }

}
