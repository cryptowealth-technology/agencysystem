import { PromptHistoryCreateNestedManyWithoutPromptsInput } from "./PromptHistoryCreateNestedManyWithoutPromptsInput";

export type PromptCreateInput = {
  category?: string | null;
  content?: string | null;
  promptHistories?: PromptHistoryCreateNestedManyWithoutPromptsInput;
  title?: string | null;
};
