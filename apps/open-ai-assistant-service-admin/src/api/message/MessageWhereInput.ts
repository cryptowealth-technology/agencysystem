import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { ConversationListRelationFilter } from "../conversation/ConversationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  conversation?: ConversationWhereUniqueInput;
  conversations?: ConversationListRelationFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
};
