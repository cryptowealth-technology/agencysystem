import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  initiator?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  title?: string | null;
  username?: string;
};
