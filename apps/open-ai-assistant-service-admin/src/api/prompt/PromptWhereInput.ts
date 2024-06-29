import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptHistoryListRelationFilter } from "../promptHistory/PromptHistoryListRelationFilter";

export type PromptWhereInput = {
  category?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  promptHistories?: PromptHistoryListRelationFilter;
  title?: StringNullableFilter;
};
