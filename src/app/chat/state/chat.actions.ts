import {createAction, props} from '@ngrx/store';
import {Message} from '../models/message';


export const loadUser = createAction(
  "[Chat] Load UserName", props<{ username: string }>()
)

export const sendMessage = createAction(
  "[Chat] send user message", props<{ userMessage: string }>()
)

export const receiveMessage = createAction(
  "[Chat] receive bot message", props<{ botMessage: string }>()
)

export const receiveMessageError = createAction(
  '[Chat] receive bot message error', props<{ errorMessage: string }>()
);

export const clearChat = createAction(
  '[Chat] clear chat'
);
