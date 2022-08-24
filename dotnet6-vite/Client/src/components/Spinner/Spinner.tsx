import { type FC } from "react";
import { Spinner as GeistSpinner } from "@geist-ui/core";

const Spinner: FC = () => {
  return (
    <div className="z-50 c-bg-secondary w-full h-full flex justify-center items-center fixed top-0 left-0">
      <GeistSpinner />
    </div>
  );
};
export default Spinner;
