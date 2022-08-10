import {
  type FC,
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type Ref,
} from "react";
import { emailSchema } from "@chia/util/types";
import cx from "classnames";

interface Props {
  error: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
}

const EmailInput: FC<Props> = forwardRef((props, ref) => {
  const { error, placeholder } = props;
  const [isError, setIsError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const id = useId();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValid = emailSchema.safeParse(value).success;
    setIsError(!isValid);
  };

  return (
    <>
      <label
        className="text-2xl font-bold text-sec-text"
        htmlFor={`${id}-email-input`}>
        Email
      </label>
      <input
        ref={ref}
        id={`${id}-email-input`}
        type="email"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={cx(
          "c-border-primary w-full rounded-lg p-2 px-2 border-2 my-3 transition ease-in-out focus:outline-none",
          isError && "border-danger",
          isFocus && !isError && "border-primary"
        )}
      />
      {isError && <div className="text-danger">{error}</div>}
    </>
  );
});

export default EmailInput;
