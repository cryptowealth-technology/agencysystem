import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { ConversationCreateNestedManyWithoutMessagesInput } from "./ConversationCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  conversations?: ConversationCreateNestedManyWithoutMessagesInput;
  sender?: string | null;
};
