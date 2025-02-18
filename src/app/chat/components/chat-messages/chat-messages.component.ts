import {Component, OnInit} from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {Message} from '../../models/message';
import {SenderType} from '../../models/sender-type';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss',
  imports: [
    MatDivider,
    DatePipe
  ],
  standalone: true
})
export class ChatMessagesComponent {
  username: string = 'Samir';
  messages: Message[] = [];

}
