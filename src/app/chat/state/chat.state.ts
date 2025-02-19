import {Message} from '../models/message';

export interface ChatState {
  username: string | null;
  messages: Message[];
  isLoading: boolean;
}

export const initialChatState: ChatState = {
  username: null,
  messages: [],
  isLoading: false
}
