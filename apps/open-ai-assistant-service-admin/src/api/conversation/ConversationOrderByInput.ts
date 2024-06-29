import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  responder?: SortOrder;
  updatedAt?: SortOrder;
};
