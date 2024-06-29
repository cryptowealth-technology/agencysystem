import { PromptHistoryUpdateManyWithoutPromptsInput } from "./PromptHistoryUpdateManyWithoutPromptsInput";

export type PromptUpdateInput = {
  category?: string | null;
  content?: string | null;
  promptHistories?: PromptHistoryUpdateManyWithoutPromptsInput;
  title?: string | null;
};
