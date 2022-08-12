import { type FC, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";
import type { LocalUser } from "@chia/util/types";

interface Props {
  children: ReactNode;
}

const RequireAuth: FC<Props> = ({ children }) => {
  const userData = useReadLocalStorage<LocalUser>("userData");

  if (!userData) return <Navigate to="/login" state={{ from: location }} />;

  return <>{children}</>;
};

export default RequireAuth;
