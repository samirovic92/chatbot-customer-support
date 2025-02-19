import {TestBed} from '@angular/core/testing';

import {ChatService} from './chat.service';
import {of} from 'rxjs';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Response of the user message', () => {
    const userMessage = 'hello'
    const response = service.getUserMessageResponse(userMessage);
    response.subscribe(res => expect(res).toEqual("Hello! How can I assist you today?"));
  });

  it('should throw error if no response availabe', () => {
    const userMessage = 'lorem'
    const response = service.getUserMessageResponse(userMessage);
    response.subscribe({
      next: () => {},
      error: (error) => expect(error.message).toEqual("Excuse me, I didn’t catch that. Could you say it in a different way?")
    });
  });

});
