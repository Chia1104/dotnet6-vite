import { z } from "zod";

export const RoleSchema = z.enum([
  "Archer",
  "Warrior",
  "Knight",
  "Monk",
  "Wizard",
  "Ninja",
  "Sekiro",
  "Thief",
]);
