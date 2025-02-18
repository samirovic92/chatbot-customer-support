import {Component} from '@angular/core';
import {ChatStarterComponent} from '../../components/chat-starter/chat-starter.component';
import {ChatInputComponent} from '../../components/chat-input/chat-input.component';
import {ChatMessagesComponent} from '../../components/chat-messages/chat-messages.component';

@Component({
  selector: 'chat-home',
  templateUrl: './chat-home.component.html',
  styleUrl: './chat-home.component.scss',
  standalone: true,
  imports: [
    ChatStarterComponent,
    ChatInputComponent,
    ChatMessagesComponent
  ]
})
export class ChatHomeComponent {

}
