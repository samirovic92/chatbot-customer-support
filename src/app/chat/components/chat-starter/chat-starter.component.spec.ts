import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChatStarterComponent} from './chat-starter.component';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState} from '../../../core/store/AppState';
import {initialChatState} from '../../state/chat.state';
import {loadUser} from '../../state/chat.actions';

describe('ChatStarterComponent', () => {
  let component: ChatStarterComponent;
  let fixture: ComponentFixture<ChatStarterComponent>;
  let store: MockStore<AppState>;
  let initialState: AppState = {chat: initialChatState};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatStarterComponent],
      providers: [
        provideNoopAnimations(),
        provideMockStore({initialState})
      ]
    })
      .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ChatStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable start conversation button if username is empty', () => {
    const btnElement = fixture.debugElement.query(By.css('.btn-start'));
    expect(btnElement.nativeElement.disabled).toBeTruthy();
  });

  it('should enable start conversation button if username is not empty', () => {
    component.usernameFormControl.setValue('user-1');
    const btnElement = fixture.debugElement.query(By.css('.btn-start'));
    expect(btnElement.nativeElement.disabled).toBeTruthy();
  });

  it('should dispatch username', () => {
    spyOn(store, 'dispatch');
    component.usernameFormControl.setValue('user-1');
    const btnElement = fixture.debugElement.query(By.css('.btn-start'));
    btnElement.triggerEventHandler('click', {});
    expect(store.dispatch).toHaveBeenCalledWith(loadUser({username: 'user-1'}));
  });
});
