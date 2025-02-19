import {AppState} from '../../core/store/AppState';
import {createSelector} from '@ngrx/store';


export const selectChatState = (state: AppState) => state.chat;

export const selectUserName = createSelector(
  selectChatState,
  (state) => state.username
);

export const selectMessages = createSelector(
  selectChatState,
  (state) => state.messages
);

export const selectIsLoading = createSelector(
  selectChatState,
  (state) => state.isLoading
);
