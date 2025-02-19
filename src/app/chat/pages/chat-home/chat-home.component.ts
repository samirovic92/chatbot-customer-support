import {Component, OnInit} from '@angular/core';
import {ChatStarterComponent} from '../../components/chat-starter/chat-starter.component';
import {ChatInputComponent} from '../../components/chat-input/chat-input.component';
import {ChatMessagesComponent} from '../../components/chat-messages/chat-messages.component';
import {Store} from '@ngrx/store';
import {selectUserName} from '../../state/hat.selectors';
import {AppState} from '../../../core/store/AppState';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'chat-home',
  templateUrl: './chat-home.component.html',
  styleUrl: './chat-home.component.scss',
  standalone: true,
  imports: [
    ChatStarterComponent,
    ChatInputComponent,
    ChatMessagesComponent,
    AsyncPipe
  ]
})
export class ChatHomeComponent {
  username$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.username$ = this.store.select(selectUserName);
  }

}
