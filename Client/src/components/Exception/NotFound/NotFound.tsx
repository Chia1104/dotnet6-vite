import { type FC } from "react";
import NotFoundAnimation from "@chia/components/Animation/NotFoundAnimation";

const NotFound: FC = () => {
  return (
    <div className="c-main c-container">
      <NotFoundAnimation />
    </div>
  );
};

export default NotFound;
