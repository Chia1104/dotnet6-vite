import { type UUID } from "@chia/shared/types";

export const getAllArmors = async () => {
  try {
    const res = await fetch("/api/armor/getallarmor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};

export const getArmor = async (id: UUID) => {
  try {
    const res = await fetch(`/api/armor/getarmorbyid?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};

export const getAllHeadgear = async () => {
  try {
    const res = await fetch("/api/headgear/getallheadgear", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};

export const getHeadgear = async (id: UUID) => {
  try {
    const res = await fetch(`/api/headgear/getheadgearbyid?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};

export const getAllWeapons = async () => {
  try {
    const res = await fetch("/api/weapon/getallweapon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};

export const getWeapon = async (id: UUID) => {
  try {
    const res = await fetch(`/api/weapon/getweaponbyid?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};

export const getAllShields = async () => {
  try {
    const res = await fetch("/api/shield/getallshield", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};

export const getShield = async (id: UUID) => {
  try {
    const res = await fetch(`/api/shield/getshieldbyid?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await res.json();

    return {
      data,
      status: res.status,
    };
  } catch (e) {
    throw e;
  }
};
