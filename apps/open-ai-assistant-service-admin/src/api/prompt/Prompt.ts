import { PromptHistory } from "../promptHistory/PromptHistory";

export type Prompt = {
  category: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  promptHistories?: Array<PromptHistory>;
  title: string | null;
  updatedAt: Date;
};
