import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChatInputComponent} from './chat-input.component';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState} from '../../../core/store/AppState';
import {initialChatState} from '../../state/chat.state';
import {By} from '@angular/platform-browser';
import {clearChat, loadUser, sendMessage} from '../../state/chat.actions';

describe('ChatInputComponent', () => {
  let component: ChatInputComponent;
  let fixture: ComponentFixture<ChatInputComponent>;
  let store: MockStore<AppState>;
  let initialState: AppState = {chat: initialChatState}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatInputComponent],
      providers: [
        provideNoopAnimations(),
        provideMockStore({initialState})
      ]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the send button is message empty', () => {
    const sendMessageBtn = fixture.debugElement.query(By.css('.btn-send-message'));
    expect(sendMessageBtn.nativeElement.disabled).toBeTruthy();
  });


  it('should enable start conversation button if username is not empty', () => {
    component.messageFormControl.setValue('Hi , I need help');
    const sendMessageBtn = fixture.debugElement.query(By.css('.btn-send-message'));
    expect(sendMessageBtn.nativeElement.disabled).toBeTruthy();
  });

  it('should dispatch user message and userMessage must be cleared ', () => {
    spyOn(store, 'dispatch');
    component.messageFormControl.setValue('Hi , I need help');
    const sendMessageBtn = fixture.debugElement.query(By.css('.btn-send-message'));
    sendMessageBtn.triggerEventHandler('click',{});
    expect(store.dispatch).toHaveBeenCalledWith(sendMessage({userMessage: 'Hi , I need help'}));
    expect(component.messageFormControl.value).toBeNull();
  });

  it('should clear chat history ', () => {
    spyOn(store, 'dispatch');
    const clearMessageBtn = fixture.debugElement.query(By.css('.btn-reset-message'));
    clearMessageBtn.triggerEventHandler('click',{});
    expect(store.dispatch).toHaveBeenCalledWith(clearChat());
  });
});
