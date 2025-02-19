import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/store/AppState';
import {loadUser} from '../../state/chat.actions';

@Component({
  selector: 'chat-starter',
  templateUrl: './chat-starter.component.html',
  styleUrl: './chat-starter.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIcon, ReactiveFormsModule],
  standalone: true
})
export class ChatStarterComponent {
  usernameFormControl: FormControl = new FormControl();

  constructor(private store: Store<AppState>) {
  }

  startConversation = () => this.store.dispatch(loadUser({username: this.usernameFormControl.value}));

  disableStartConversation = (): boolean => !this.usernameFormControl.value;

}
