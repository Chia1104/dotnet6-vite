import { UUID } from "@chia/util/types";

export type Weapon = {
  weaponId: UUID;
  name: string;
  description: string;
  image: string;
  defense: number;
  attack: number;
  level: number;
  category: number;
  heaviness: number;
};
