import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type MessageUpdateManyWithoutConversationsInput = {
  connect?: Array<MessageWhereUniqueInput>;
  disconnect?: Array<MessageWhereUniqueInput>;
  set?: Array<MessageWhereUniqueInput>;
};
