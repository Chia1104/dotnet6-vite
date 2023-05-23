import { z } from "zod";

export const NameSchema = z.string().min(1).max(10);
