import {Component, OnInit} from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {Message} from '../../models/message';
import {AsyncPipe, DatePipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/store/AppState';
import {selectMessages, selectUserName} from '../../state/chat.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss',
  imports: [
    MatDivider,
    DatePipe,
    AsyncPipe
  ],
  standalone: true
})
export class ChatMessagesComponent {
  username$: Observable<string | null>;
  messages$: Observable<Message[]>;

  constructor(private readonly store: Store<AppState>) {
    this.username$ = this.store.select(selectUserName);
    this.messages$ = this.store.select(selectMessages);
  }


}
