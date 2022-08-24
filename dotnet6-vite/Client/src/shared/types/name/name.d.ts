import { z } from "zod";
import { NameSchema } from "@chia/shared/schemas";

export type Name = z.infer<typeof NameSchema>;
