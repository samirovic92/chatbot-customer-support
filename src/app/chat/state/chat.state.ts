import {Message} from '../models/message';

export interface ChatState {
  username: string | null;
  messages: Message[];
}

export const initialChatState: ChatState = {
  username: null,
  messages: []
}
