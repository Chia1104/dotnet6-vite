import type { Shield } from "@chia/util/types";

export interface IShieldState {
  allShields: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Shield[] | null;
    };
  };
  shield: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Shield | null;
    };
  };
}

export const shieldInitState: IShieldState = {
  allShields: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
  shield: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
};
