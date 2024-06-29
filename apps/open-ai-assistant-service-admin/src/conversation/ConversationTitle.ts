import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "content";

export const ConversationTitle = (record: TConversation): string => {
  return record.content?.toString() || String(record.id);
};
