import { SortOrder } from "../../util/SortOrder";

export type PromptOrderByInput = {
  category?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
