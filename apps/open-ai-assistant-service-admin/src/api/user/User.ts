import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  initiator: string | null;
  lastName: string | null;
  roles: JsonValue;
  title: string | null;
  updatedAt: Date;
  username: string;
};
