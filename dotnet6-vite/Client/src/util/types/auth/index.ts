import { UUID } from "@chia/util/types/uuid";
import { Email } from "@chia/util/types/email";
import { Password } from "@chia/util/types/password";
import { Role } from "@chia/util/types/role";

export type Auth = {
  userId?: UUID;
  email?: Email;
  name?: string;
  accessToken?: string;
};

export type RegisterDto = {
  email: Email;
  password: Password;
  name: string;
  role: Role;
};
