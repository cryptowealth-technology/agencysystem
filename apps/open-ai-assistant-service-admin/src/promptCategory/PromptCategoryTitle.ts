import { PromptCategory as TPromptCategory } from "../api/promptCategory/PromptCategory";

export const PROMPTCATEGORY_TITLE_FIELD = "name";

export const PromptCategoryTitle = (record: TPromptCategory): string => {
  return record.name?.toString() || String(record.id);
};
