import {chatReducer} from './chat.reducer';
import {clearChat, loadUser, receiveMessage, receiveMessageError, sendMessage} from './chat.actions';
import {ChatState} from './chat.state';
import {SenderType} from '../models/sender-type';
import {Message} from '../models/message';

describe('Chat reducer', () => {

  it('should load username', () => {
    const initialState: ChatState = {
      username: null,
      messages: []
    };
    const newState = chatReducer(initialState, loadUser({username: 'user-1'}));
    expect(newState.username).toEqual('user-1')
  });

  it('should send user message', () => {
    const initialState: ChatState = {
      username: null,
      messages: []
    };
    const newState = chatReducer(initialState, sendMessage({userMessage: 'lorem message'}));
    const expectedMessage: Message = {sender: SenderType.USER, content: 'lorem message', timestamp: new Date() };
    expect(newState.messages).toEqual([expectedMessage]);
  });

  it('should receive bot message', () => {
    const initialState: ChatState = {
      username: null,
      messages: []
    };
    const newState = chatReducer(initialState, receiveMessage({botMessage: 'lorem message bot'}));
    const expectedMessage: Message = {sender: SenderType.BOT, content: 'lorem message bot', timestamp: new Date() };
    expect(newState.messages).toEqual([expectedMessage]);
  });

  it('should handle bot error', () => {
    const initialState: ChatState = {
      username: null,
      messages: []
    };
    const errorMessage = "bot Error message";
    const newState = chatReducer(initialState, receiveMessageError({errorMessage: errorMessage}));
    const expectedMessage: Message = {
      sender: SenderType.BOT,
      content: errorMessage,
      timestamp: new Date()
    };
    expect(newState.messages).toEqual([expectedMessage]);
  });

  it('should clear chat history', () => {
    const initialState: ChatState = {
      username: null,
      messages: [{sender: SenderType.USER, content: 'lorem message', timestamp: new Date() }]
    };
    const newState = chatReducer(initialState, clearChat());
    expect(newState.messages).toEqual([]);
    expect(newState.username).toEqual(null);
  });
});

