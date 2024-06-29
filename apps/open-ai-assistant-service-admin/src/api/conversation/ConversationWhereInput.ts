import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ConversationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  messages?: MessageListRelationFilter;
  responder?: StringNullableFilter;
};
