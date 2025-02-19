import {createReducer, on} from '@ngrx/store';
import {initialChatState} from './chat.state';
import {loadUser, receiveMessage, receiveMessageError, sendMessage} from './chat.actions';
import {SenderType} from '../models/sender-type';


export const chatReducer = createReducer(
  initialChatState,
  on(loadUser, (currentState, {username}) => {
    return {
      ...currentState,
      username
    }
  }),
  on(sendMessage, (currentState, {userMessage}) => {
      return {
        ...currentState,
        messages: [
          ...currentState.messages,
          {
            sender: SenderType.USER,
            content: userMessage,
            timestamp: new Date()
          }
        ]
      }
    }
  ),
  on(receiveMessage, (currentState, {botMessage}) => {
    return {
      ...currentState,
      messages: [
        ...currentState.messages,
        {
          sender: SenderType.BOT,
          content: botMessage,
          timestamp: new Date()
        }
      ]
    }
  }),
  on(receiveMessageError, (currentState,{errorMessage}) => {
    return {
      ...currentState,
      messages: [
        ...currentState.messages,
        {
          sender: SenderType.BOT,
          content: errorMessage,
          timestamp: new Date()
        }
      ]
    }
  })
)

