import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'chat-starter',
  templateUrl: './chat-starter.component.html',
  styleUrl: './chat-starter.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIcon],
  standalone: true
})
export class ChatStarterComponent {

}
