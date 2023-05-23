import { type FC, type ReactNode } from "react";
import { Navigate, type To } from "react-router-dom";

interface Props {
  children: ReactNode;
  condition: boolean;
  to: To;
}

const Redirect: FC<Props> = ({ children, condition, to }) => {
  if (condition) return <Navigate to={to} state={{ from: location }} />;

  return <>{children}</>;
};

export default Redirect;
