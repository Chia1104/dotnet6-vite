import { type IUserState } from "@chia/store/modules/User/state";

export const userReducer = {
  clearUserDetails: (state: IUserState) => {
    state.user = {
      loading: "idle",
      error: null,
      data: {
        message: "",
        data: null,
      },
    };
  },
};
