import {
  type FC,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from "react";
import cx from "classnames";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
}

const ButtonPrimary: FC<Props> = (props) => {
  const { children } = props;
  return (
    <button
      className="c-bg-gradient-green-to-purple p-2 px-5 rounded-full text-white hover:scale-[1.05] transition ease-in-out"
      {...props}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
