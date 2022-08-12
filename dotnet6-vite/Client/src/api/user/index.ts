import { UUID } from "@chia/util/types";

export const getAllUsers = async (
  token: string
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch("/api/user/getalluser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const getUser = async (
  token: string,
  id: UUID
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/getuserbyid?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const postUserArmor = async (
  token: string,
  armorId: UUID
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/UpdateUserArmor?armorId=${armorId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const deleteUserArmor = async (
  token: string
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/DeleteUserArmor`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const postUserHeadgear = async (
  token: string,
  headgearId: UUID
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(
      `/api/user/UpdateUserHeadgear?headgearId=${headgearId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e: any) {
    throw e;
  }
};

export const deleteUserHeadgear = async (
  token: string
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/DeleteUserHeadgear`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const postUserWeapon = async (
  token: string,
  weaponId: UUID
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/UpdateUserWeapon?weaponId=${weaponId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const deleteUserWeapon = async (
  token: string
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/DeleteUserWeapon`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const postUserShield = async (
  token: string,
  shieldId: UUID
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/UpdateUserShield?shieldId=${shieldId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const deleteUserShield = async (
  token: string
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch(`/api/user/DeleteUserShield`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
