import {
  type FC,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";
import cx from "classnames";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

const Button: FC<Props> = (props) => {
  const { text } = props;
  return (
    <button
      className="group relative inline-flex transition ease-in-out rounded self-center bg-primary"
      {...props}>
      <span
        className={cx(
          "c-button-secondary transform text-base",
          props.disabled
            ? "text-gray-400"
            : "group-hover:-translate-x-1 group-hover:-translate-y-1"
        )}>
        {text}
      </span>
    </button>
  );
};

export default Button;
