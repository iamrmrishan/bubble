import { JsonValue } from "type-fest";

export type Post = {
  content: string | null;
  createdAt: Date;
  creator: string | null;
  id: string;
  media: JsonValue;
  title: string | null;
  updatedAt: Date;
};
