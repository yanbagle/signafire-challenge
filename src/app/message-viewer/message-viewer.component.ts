import { Component, OnInit } from '@angular/core';
import { MessageService } from './message-service/message.service';
import { Message } from './message-model';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.css']
})
export class MessageViewerComponent implements OnInit {

  // gets passed down as input for display
  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe((res) => {
      this.messages = res;
    });
  }

}
