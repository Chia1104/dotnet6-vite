import type { Headgear } from "@chia/shared/types";

export interface IHeadgearState {
  allHeadgear: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Headgear[] | null;
    };
  };
  headgear: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
    data: {
      message: string;
      data?: Headgear | null;
    };
  };
}

export const headgearInitState: IHeadgearState = {
  allHeadgear: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
  headgear: {
    loading: "idle",
    error: null,
    data: {
      message: "",
    },
  },
};
