import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  payments?: PaymentUpdateManyWithoutUsersInput;
  profilePicture?: InputJsonValue;
  role?: "Option1" | null;
  username?: string | null;
};
