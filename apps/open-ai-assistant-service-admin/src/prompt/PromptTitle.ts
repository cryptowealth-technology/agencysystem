import { Prompt as TPrompt } from "../api/prompt/Prompt";

export const PROMPT_TITLE_FIELD = "title";

export const PromptTitle = (record: TPrompt): string => {
  return record.title?.toString() || String(record.id);
};
