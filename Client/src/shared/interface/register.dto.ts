import { Email, Password, Role } from "@chia/shared/types";

export interface RegisterDto {
  email: Email;
  password: Password;
  name: string;
  role: Role;
}
