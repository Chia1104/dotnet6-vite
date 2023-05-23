import { type FC, type ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";
import type { LocalUser } from "@chia/shared/types";

interface Props {
  children: ReactNode;
}

const IfLogined: FC<Props> = ({ children }) => {
  const userData = useReadLocalStorage<LocalUser>("userData");
  const location = useLocation();

  if (userData) return <Navigate to="/" state={{ from: location }} />;

  return <>{children}</>;
};

export default IfLogined;
