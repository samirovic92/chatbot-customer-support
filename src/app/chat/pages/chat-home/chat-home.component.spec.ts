import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChatHomeComponent} from './chat-home.component';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {By} from '@angular/platform-browser';
import {AppState} from '../../../core/store/AppState';
import {initialChatState} from '../../state/chat.state';
import {selectUserName} from '../../state/chat.selectors';

describe('ChatHomeComponent', () => {
  let component: ChatHomeComponent;
  let fixture: ComponentFixture<ChatHomeComponent>;
  let store: MockStore<AppState>;
  let initialState: AppState = {chat: initialChatState};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChatHomeComponent
      ],
      providers: [
        provideNoopAnimations(),
        provideMockStore({initialState})
      ]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ChatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the chat starter if the username is empty', () => {
    store.overrideSelector(selectUserName, null);
    fixture = TestBed.createComponent(ChatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const chatStarterElement = fixture.debugElement.query(By.css('chat-starter'));
    expect(chatStarterElement).not.toBeNull();
  });

  it('should hide the chat starter if the username not empty', () => {
    store.overrideSelector(selectUserName, 'user-1');
    fixture = TestBed.createComponent(ChatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const chatStarterElement = fixture.debugElement.query(By.css('chat-starter'));
    expect(chatStarterElement).toBeNull();
  });

  it('should hide the chat message & input if the username is empty', () => {
    store.overrideSelector(selectUserName, null);
    fixture = TestBed.createComponent(ChatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const chatMessageElement = fixture.debugElement.query(By.css('chat-messages'));
    expect(chatMessageElement).toBeNull();
    const chatInputElement = fixture.debugElement.query(By.css('chat-input'));
    expect(chatInputElement).toBeNull();
  });

  it('should show the chat messages & input if the username not empty', () => {
    store.overrideSelector(selectUserName, 'user-1');
    fixture = TestBed.createComponent(ChatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const chatMessageElement = fixture.debugElement.query(By.css('chat-messages'));
    expect(chatMessageElement).not.toBeNull();
    const chatInputElement = fixture.debugElement.query(By.css('chat-input'));
    expect(chatInputElement).not.toBeNull();
  });

});
