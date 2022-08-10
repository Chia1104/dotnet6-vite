import { type FC, type ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";

interface Props {
  children: ReactNode;
}

const IfLogined: FC<Props> = ({ children }) => {
  const userData = useReadLocalStorage("userData");
  const location = useLocation();

  if (userData) return <Navigate to="/" state={{ from: location }} replace />;

  return <>{children}</>;
};

export default IfLogined;
