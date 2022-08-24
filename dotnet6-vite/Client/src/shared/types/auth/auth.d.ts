import { Email, UUID } from "@chia/shared/types";

export type Auth = {
  userId?: UUID;
  email?: Email;
  name?: string;
  accessToken?: string;
};
