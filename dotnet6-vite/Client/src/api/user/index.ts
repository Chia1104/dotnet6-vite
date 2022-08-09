import {UUID} from "@chia/util/types";

export const getAllUsers = async (token: string): Promise<{
    data: any;
    status: number;
}> => {
    try {
        const res = await fetch("/api/user/getalluser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const data: any = await res.json();

        return {
            data,
            status: res.status,
        };
    } catch (e: any) {
        throw e;
    }
};

export const getUser = async (token: string, id: UUID): Promise<{
    data: any;
    status: number;
}> => {
    try {
        const res = await fetch(`/api/user/getuserbyid?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const data: any = await res.json();

        return {
            data,
            status: res.status,
        };
    } catch (e: any) {
        throw e;
    }
}