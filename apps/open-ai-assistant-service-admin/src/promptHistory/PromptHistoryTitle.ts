import { PromptHistory as TPromptHistory } from "../api/promptHistory/PromptHistory";

export const PROMPTHISTORY_TITLE_FIELD = "id";

export const PromptHistoryTitle = (record: TPromptHistory): string => {
  return record.id?.toString() || String(record.id);
};
