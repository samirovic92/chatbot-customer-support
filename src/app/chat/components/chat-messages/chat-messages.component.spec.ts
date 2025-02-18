import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChatMessagesComponent} from './chat-messages.component';
import {By} from '@angular/platform-browser';
import {Message} from '../../models/message';
import {SenderType} from '../../models/sender-type';

describe('ChatMessagesComponent', () => {
  let component: ChatMessagesComponent;
  let fixture: ComponentFixture<ChatMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessagesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user message with date', () => {
    const currentDate = new Date('2025-02-18T12:00:00');
    const message: Message = {sender: SenderType.USER, content: "Test user message", timestamp: currentDate};
    component.messages = [message];
    fixture.detectChanges();
    const userMessageElements = fixture.debugElement.queryAll(By.css('.chat-bubble'));
    expect(userMessageElements[0].nativeElement.textContent.trim())
      .toEqual("Test user message  18 Feb 2025 at 12:00 PM");
  });

  it('should display the bot message with date', () => {
    const currentDate = new Date('2025-02-18T12:00:00');
    const message: Message = {sender: SenderType.BOT, content: "Test bot message", timestamp: currentDate};
    component.messages = [message];
    fixture.detectChanges();
    const botMessageElements = fixture.debugElement.queryAll(By.css('.chat-bubble'));
    expect(botMessageElements[0].nativeElement.textContent.trim())
      .toEqual("Test bot message  18 Feb 2025 at 12:00 PM");
  });
});
