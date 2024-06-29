import { PromptCategoryWhereInput } from "./PromptCategoryWhereInput";
import { PromptCategoryOrderByInput } from "./PromptCategoryOrderByInput";

export type PromptCategoryFindManyArgs = {
  where?: PromptCategoryWhereInput;
  orderBy?: Array<PromptCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
