import { InputJsonValue } from "../../types";
import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";

export type PromptHistoryCreateInput = {
  change?: InputJsonValue;
  prompt?: PromptWhereUniqueInput | null;
  timestamp?: Date | null;
};
