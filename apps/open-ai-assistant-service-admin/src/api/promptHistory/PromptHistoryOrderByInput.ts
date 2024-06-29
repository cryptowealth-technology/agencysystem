import { SortOrder } from "../../util/SortOrder";

export type PromptHistoryOrderByInput = {
  change?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  promptId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
