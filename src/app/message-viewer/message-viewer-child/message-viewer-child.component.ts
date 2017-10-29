import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message-model';

@Component({
  selector: 'app-message-viewer-child',
  templateUrl: './message-viewer-child.component.html',
  styleUrls: ['./message-viewer-child.component.css']
})
export class MessageViewerChildComponent implements OnInit {

  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
