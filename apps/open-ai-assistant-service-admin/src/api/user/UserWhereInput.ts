import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  initiator?: StringNullableFilter;
  lastName?: StringNullableFilter;
  title?: StringNullableFilter;
  username?: StringFilter;
};
