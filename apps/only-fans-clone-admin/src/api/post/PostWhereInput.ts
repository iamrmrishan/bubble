import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PostWhereInput = {
  content?: StringNullableFilter;
  creator?: StringNullableFilter;
  id?: StringFilter;
  media?: JsonFilter;
  title?: StringNullableFilter;
};
