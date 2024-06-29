import { JsonValue } from "type-fest";
import { Prompt } from "../prompt/Prompt";

export type PromptHistory = {
  change: JsonValue;
  createdAt: Date;
  id: string;
  prompt?: Prompt | null;
  timestamp: Date | null;
  updatedAt: Date;
};
