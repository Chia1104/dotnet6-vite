import type { Email, Password, RegisterDto } from "@chia/util/types";

export const login = async (
  email: Email,
  password: Password
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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

export const register = async (
  register: RegisterDto
): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
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
