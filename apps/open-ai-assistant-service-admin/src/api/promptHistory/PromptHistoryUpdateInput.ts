import { InputJsonValue } from "../../types";
import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";

export type PromptHistoryUpdateInput = {
  change?: InputJsonValue;
  prompt?: PromptWhereUniqueInput | null;
  timestamp?: Date | null;
};
