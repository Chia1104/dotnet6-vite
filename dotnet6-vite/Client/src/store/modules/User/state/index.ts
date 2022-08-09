import type { User } from "@chia/util/types";

export interface IUserState {
    allUsers: {
        loading: "idle" | "pending" | "succeeded" | "failed";
        error: any;
        data: {
            message: string;
            data?: User[] | null;
        }
    },
    user: {
        loading: "idle" | "pending" | "succeeded" | "failed";
        error: any;
        data: {
            message: string;
            data?: User | null;
        }
    }
}

export const userInitState: IUserState = {
    allUsers: {
        loading: "idle",
        error: null,
        data: {
            message: ""
        }
    },
    user: {
        loading: "idle",
        error: null,
        data: {
            message: ""
        }
    }
}