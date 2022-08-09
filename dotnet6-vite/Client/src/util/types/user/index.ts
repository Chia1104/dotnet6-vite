import {Email, UUID, Armor, Headgear, Shield, Weapon} from "@chia/util/types";

export type User = {
    userId: UUID;
    name: string;
    email: Email;
    createdAt: string;
    role: number;
    isActive: boolean;
    armor: Armor | null;
    headgear: Headgear | null;
    shield: Shield | null;
    weapon: Weapon | null;
}