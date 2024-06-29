import { PromptHistoryWhereInput } from "./PromptHistoryWhereInput";
import { PromptHistoryOrderByInput } from "./PromptHistoryOrderByInput";

export type PromptHistoryFindManyArgs = {
  where?: PromptHistoryWhereInput;
  orderBy?: Array<PromptHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
