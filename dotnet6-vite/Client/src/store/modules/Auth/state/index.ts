import type { Auth } from "@chia/util/types";

export interface IAuthState {
  loginState: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
  };
  registerState: {
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: any;
  };
  authData: {
    isAuthenticated: boolean;
    auth?: Auth | null;
  };
}

export const authInitState: IAuthState = {
  loginState: {
    loading: "idle",
    error: null,
  },
  registerState: {
    loading: "idle",
    error: null,
  },
  authData: {
    isAuthenticated: false,
    auth: null,
  },
};
