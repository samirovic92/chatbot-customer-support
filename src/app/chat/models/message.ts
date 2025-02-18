import {SenderType} from './sender-type';

export interface Message {
  sender: SenderType;
  content: string;
  timestamp: Date;
}
