import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sender?: SortOrder;
  updatedAt?: SortOrder;
};
