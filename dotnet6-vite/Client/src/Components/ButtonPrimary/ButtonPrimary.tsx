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
  buttonClassName?: string;
}

const ButtonPrimary: FC<Props> = (props) => {
  const { children, buttonClassName } = props;
  return (
    <button
      className={cx(
        "c-bg-gradient-green-to-purple p-2 px-5 rounded-full text-white hover:scale-[1.05] transition ease-in-out shadow-cyan-500/50 shadow-xl",
        buttonClassName
      )}
      {...props}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
