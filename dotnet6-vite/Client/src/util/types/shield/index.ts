import {UUID} from "@chia/util/types";

export type Shield = {
    shieldId: UUID;
    name: string;
    description: string;
    image: string;
    defense: number;
    attack: number;
    level: number;
    heaviness: number;
}