import type { Armor } from "@chia/util/types";

export interface IArmorState {
  allArmors: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Armor[] | null;
    };
  };
  armor: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Armor | null;
    };
  };
}

export const armorInitState: IArmorState = {
  allArmors: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
  armor: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
};
