import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { ConversationUpdateManyWithoutMessagesInput } from "./ConversationUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  conversations?: ConversationUpdateManyWithoutMessagesInput;
  sender?: string | null;
};
