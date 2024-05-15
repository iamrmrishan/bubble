import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  creator?: SortOrder;
  id?: SortOrder;
  media?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
