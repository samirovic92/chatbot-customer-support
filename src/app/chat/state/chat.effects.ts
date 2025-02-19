import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {ChatService} from '../services/chat.service';
import {receiveMessage, receiveMessageError, sendMessage} from './chat.actions';
import {catchError, map, of, switchMap} from 'rxjs';

export const sendMessage$ = createEffect(
  (actions$ = inject(Actions), chatService = inject(ChatService)) => {
    return actions$.pipe(
      ofType(sendMessage),
      switchMap(({userMessage}) =>
        chatService.getUserMessageResponse(userMessage).pipe(
          map(botResponse => receiveMessage({botMessage: botResponse})),
          catchError((error) => of(receiveMessageError({errorMessage: error.message})))
        )
      )
    );
  },
  {functional: true}
);
