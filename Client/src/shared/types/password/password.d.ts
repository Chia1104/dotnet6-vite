import { z } from "zod";
import { PasswordSchema } from "@chia/shared/schemas";

export type Password = z.infer<typeof PasswordSchema>;
