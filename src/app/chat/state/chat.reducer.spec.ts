import {chatReducer} from './chat.reducer';
import {loadUser} from './chat.actions';
import {ChatState} from './chat.state';

describe('Chat reducer', () => {

  it('should load username', () => {
    const initialState: ChatState = {
      username: null,
      messages: []
    };
    const newState = chatReducer(initialState, loadUser({username: 'user-1'}));
    expect(newState.username).toEqual('user-1')
  });
});

