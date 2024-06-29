import { Message } from "../message/Message";

export type Conversation = {
  content: string | null;
  createdAt: Date;
  id: string;
  message?: Message | null;
  messages?: Array<Message>;
  responder: string | null;
  updatedAt: Date;
};
