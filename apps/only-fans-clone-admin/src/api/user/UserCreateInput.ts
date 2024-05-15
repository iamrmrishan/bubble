import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  profilePicture?: InputJsonValue;
  role?: "Option1" | null;
  username?: string | null;
};
