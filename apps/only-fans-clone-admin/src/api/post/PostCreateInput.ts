import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  content?: string | null;
  creator?: string | null;
  media?: InputJsonValue;
  title?: string | null;
};
