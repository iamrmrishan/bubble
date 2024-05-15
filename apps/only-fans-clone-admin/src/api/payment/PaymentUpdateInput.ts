import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
