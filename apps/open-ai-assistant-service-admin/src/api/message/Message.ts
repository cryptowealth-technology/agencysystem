import { Conversation } from "../conversation/Conversation";

export type Message = {
  content: string | null;
  conversation?: Conversation | null;
  conversations?: Array<Conversation>;
  createdAt: Date;
  id: string;
  sender: string | null;
  updatedAt: Date;
};
