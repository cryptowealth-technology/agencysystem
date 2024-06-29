import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  content?: string | null;
  message?: MessageWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  responder?: string | null;
};
