import { UUID } from "@chia/util/types";

export type Headgear = {
  headgearId: UUID;
  name: string;
  description: string;
  image: string;
  defense: number;
  level: number;
  heaviness: number;
};
