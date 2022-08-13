import { z } from "zod";

export const nameSchema = z.string().min(1).max(10);
export type Name = z.infer<typeof nameSchema>;
