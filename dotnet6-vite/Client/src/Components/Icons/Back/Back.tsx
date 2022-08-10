import { type FC } from "react";
import cx from "classnames";

interface Props {
  iconStyle?: string | undefined;
  strokeWidth?: number | undefined;
}

const Back: FC<Props> = (props) => {
  const { iconStyle, strokeWidth = 2 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cx("h-6 w-6", iconStyle)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
};

export default Back;
