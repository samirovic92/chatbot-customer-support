import {AppState} from '../../core/store/AppState';
import {createSelector} from '@ngrx/store';


export const selectChatState = (state: AppState) => state.chat;

export const selectUserName = createSelector(
  selectChatState,
  (state) => state.username
);
