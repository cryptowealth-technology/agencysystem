import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PromptHistoryWhereInput = {
  change?: JsonFilter;
  id?: StringFilter;
  prompt?: PromptWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
