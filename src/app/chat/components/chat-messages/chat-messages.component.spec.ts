import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChatMessagesComponent} from './chat-messages.component';
import {By} from '@angular/platform-browser';
import {Message} from '../../models/message';
import {SenderType} from '../../models/sender-type';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState} from '../../../core/store/AppState';
import {initialChatState} from '../../state/chat.state';
import {selectUserName} from '../../state/chat.selectors';
import {of} from 'rxjs';

describe('ChatMessagesComponent', () => {
  let component: ChatMessagesComponent;
  let fixture: ComponentFixture<ChatMessagesComponent>;
  let store: MockStore<AppState>;
  let initialState: AppState = {chat: initialChatState};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessagesComponent],
      providers: [
        provideMockStore({initialState})
      ]
    })
      .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the username', () =>{
    store.overrideSelector(selectUserName, 'user-1');
    fixture.destroy();
    fixture = TestBed.createComponent(ChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const usernameElement = fixture.debugElement.query(By.css('.username'));
    expect(usernameElement.nativeElement.textContent.trim()).toEqual('user-1');
  });

  it('should display the user message with date', () => {
    const currentDate = new Date('2025-02-18T12:00:00');
    const message: Message = {sender: SenderType.USER, content: "Test user message", timestamp: currentDate};
    component.messages$ = of([message]);
    fixture.detectChanges();
    const userMessageElements = fixture.debugElement.queryAll(By.css('.chat-bubble'));
    expect(userMessageElements[0].nativeElement.textContent.trim())
      .toEqual("Test user message  18 Feb 2025 at 12:00 PM");
  });

  it('should display the bot message with date', () => {
    const currentDate = new Date('2025-02-18T12:00:00');
    const message: Message = {sender: SenderType.BOT, content: "Test bot message", timestamp: currentDate};
    component.messages$ = of([message]);
    fixture.detectChanges();
    const botMessageElements = fixture.debugElement.queryAll(By.css('.chat-bubble'));
    expect(botMessageElements[0].nativeElement.textContent.trim())
      .toEqual("Test bot message  18 Feb 2025 at 12:00 PM");
  });

  it('should show loader', () => {
    component.isLoading$ = of(true);
    fixture.detectChanges();
    const chatLoaderElement = fixture.debugElement.query(By.css('chat-loader'));
    expect(chatLoaderElement).not.toBeNull();
  });

  it('should hide loader', () => {
    component.isLoading$ = of(false);
    fixture.detectChanges();
    const chatLoaderElement = fixture.debugElement.query(By.css('chat-loader'));
    expect(chatLoaderElement).toBeNull();
  });

});
