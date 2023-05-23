import { z } from "zod";
import { RoleSchema } from "@chia/shared/schemas";

export type Role = z.infer<typeof RoleSchema>;
