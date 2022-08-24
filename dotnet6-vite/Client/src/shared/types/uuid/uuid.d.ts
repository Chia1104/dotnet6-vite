import { z } from "zod";
import { UUIDSchema } from "@chia/shared/schemas";

export type UUID = z.infer<typeof UUIDSchema>;
