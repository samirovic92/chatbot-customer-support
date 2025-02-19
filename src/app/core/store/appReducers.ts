import {chatReducer} from '../../chat/state/chat.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './AppState';

export const appReducers: ActionReducerMap<AppState> = {
  chat: chatReducer
};
