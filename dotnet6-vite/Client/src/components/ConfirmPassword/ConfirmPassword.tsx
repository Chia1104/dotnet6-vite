﻿import {
  type FC,
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type Ref,
  type RefObject,
} from "react";
import cx from "classnames";

interface Props {
  title: string;
  error: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  refTarget: RefObject<HTMLInputElement>;
  titleClassName?: string | undefined;
  inputClassName?: string | undefined;
}

const ConfirmPassword: FC<Props> = forwardRef((props: Props, ref) => {
  const {
    title,
    error,
    placeholder,
    titleClassName,
    inputClassName,
    refTarget,
  } = props;
  const [isError, setIsError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const id = useId();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValid = refTarget.current?.value === value;
    setIsError(!isValid);
  };

  return (
    <>
      <label
        className={cx("text-2xl font-bold", titleClassName)}
        htmlFor={`${id}-password-input`}>
        {title}
      </label>
      <input
        ref={ref}
        id={`${id}-password-input`}
        type="password"
        required
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={cx(
          "c-border-primary w-full rounded-lg p-2 px-2 border-2 my-3 transition ease-in-out focus:outline-none bg-dark",
          isError && "border-danger",
          isFocus && !isError && "border-primary",
          inputClassName
        )}
      />
      {isError && <div className="text-danger">{error}</div>}
    </>
  );
});

ConfirmPassword.displayName = "ConfirmPassword";

export default ConfirmPassword;
