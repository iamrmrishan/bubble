import { User } from "../user/User";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
