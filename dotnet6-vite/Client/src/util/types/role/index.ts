import { z } from "zod";

export const roleSchema = z.enum([
  "Archer",
  "Warrior",
  "Knight",
  "Monk",
  "Wizard",
  "Ninja",
  "Sekiro",
  "Thief",
]);

export type Role = z.infer<typeof roleSchema>;
