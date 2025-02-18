import { Component } from '@angular/core';
import {MatFormField, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
  imports: [
    MatFormField, MatInput, MatIconButton, MatSuffix, MatIcon
  ],
  standalone: true
})
export class ChatInputComponent {
  // should use formControl for input

}
