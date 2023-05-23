import { z } from "zod";
import { EmailSchema } from "@chia/shared/schemas";

export type Email = z.infer<typeof EmailSchema>;
