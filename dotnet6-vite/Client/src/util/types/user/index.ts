import {
  Email,
  UUID,
  Armor,
  Headgear,
  Shield,
  Weapon,
  Name,
} from "@chia/util/types";

export type User = {
  userId: UUID;
  name: Name;
  email: Email;
  createdAt: string;
  role: number;
  isActive: boolean;
  armor: Armor | null;
  headgear: Headgear | null;
  shield: Shield | null;
  weapon: Weapon | null;
};
