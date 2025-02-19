import {createReducer, on} from '@ngrx/store';
import {initialChatState} from './chat.state';
import {loadUser} from './chat.actions';


export const chatReducer = createReducer(
  initialChatState,
  on(loadUser, (currentState, {username}) => {
    return {
      ...currentState,
      username
    }
  }),
)

