import {Component} from '@angular/core';
import {MatFormField, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/store/AppState';
import {clearChat, sendMessage} from '../../state/chat.actions';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
  imports: [
    MatFormField, MatInput, MatIconButton, MatSuffix, MatIcon, ReactiveFormsModule, MatButton
  ],
  standalone: true
})
export class ChatInputComponent {
  messageFormControl: FormControl = new FormControl();

  constructor(private store: Store<AppState>) {
  }

  sendUserMessage = () => {
    this.store.dispatch(sendMessage({userMessage: this.messageFormControl.value}));
    this.messageFormControl.reset();
  }

  disableSendMessage = () => !this.messageFormControl.value;

  clearChatHistory = () => this.store.dispatch(clearChat());
}
