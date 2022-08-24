import type { Weapon } from "@chia/shared/types";

export interface IWeaponState {
  allWeapons: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Weapon[] | null;
    };
  };
  weapon: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Weapon | null;
    };
  };
}

export const weaponInitState: IWeaponState = {
  allWeapons: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
  weapon: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
};
