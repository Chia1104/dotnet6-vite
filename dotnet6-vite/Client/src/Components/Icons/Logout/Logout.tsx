import { type FC } from "react";
import cx from "classnames";

interface Props {
  iconStyle?: string | undefined;
  strokeWidth?: number | undefined;
}

const Logout: FC<Props> = (props) => {
  const { iconStyle, strokeWidth = 2 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cx("h-6 w-6", iconStyle)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={strokeWidth}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
};

export default Logout;
