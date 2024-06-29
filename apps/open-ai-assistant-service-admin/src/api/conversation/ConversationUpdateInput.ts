import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  content?: string | null;
  message?: MessageWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutConversationsInput;
  responder?: string | null;
};
