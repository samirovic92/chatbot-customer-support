import {Injectable} from '@angular/core';
import {ChatMessageResponse} from '../models/ChatMessageResponse';
import {delay, Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private responses: ChatMessageResponse[] = [
    {keywords: ['price', 'cost', 'pricing'], response: 'Our pricing starts at $9.99/month'},
    {keywords: ['hello', 'hi', 'hey'], response: 'Hello! How can I assist you today?'},
    {keywords: ['help', 'support'], response: 'I\'m here to help. What can I do for you?'},
    {
      keywords: ['features', 'services'],
      response: 'We offer various features including cloud storage, real-time sync, and 24/7 support'
    }
  ]

  constructor() {
  }

  getUserMessageResponse(userMessage: string): Observable<string> {
    const response = this.findResponse(userMessage);
    if(!response) {
      return throwError( () => new Error("Excuse me, I didn’t catch that. Could you say it in a different way?"))
    }
    return of(response);
  }

  private findResponse(userMessage: string): string | undefined {
    const messageLower = userMessage.toLowerCase();
    const matchedResponse =
      this.responses.find((res: ChatMessageResponse) =>
        res.keywords.some((keyword) => messageLower.includes(keyword))
      );

    return matchedResponse?.response;
  }
}
