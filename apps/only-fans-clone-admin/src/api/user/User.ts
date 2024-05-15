import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  payments?: Array<Payment>;
  profilePicture: JsonValue;
  role?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
