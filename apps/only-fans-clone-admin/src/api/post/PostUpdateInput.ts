import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  content?: string | null;
  creator?: string | null;
  media?: InputJsonValue;
  title?: string | null;
};
