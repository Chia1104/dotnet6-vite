import { Email, Role, UUID } from "@chia/util/types";

export type LocalUser = {
  userId: UUID;
  email: Email;
  name: string;
  role: Role;
  accessToken: string;
};
