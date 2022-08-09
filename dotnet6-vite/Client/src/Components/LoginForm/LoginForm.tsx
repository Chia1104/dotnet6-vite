import { type FC, useId, type FormEvent, useRef } from "react";
import { emailSchema, passwordSchema } from "@chia/util/types";
import { useToasts } from "@geist-ui/core";
import { selectAuthData, selectLoginState } from "@chia/store/modules/Auth";
import { loginAsync } from "@chia/store/modules/Auth/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";

export const LoginForm: FC = () => {
  const { setToast } = useToasts();
  const id = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const authData = useAppSelector(selectAuthData);
  const loginState = useAppSelector(selectLoginState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!emailSchema.safeParse(email).success) {
      setToast({
        text: "Invalid email",
        type: "warning",
      });
      return;
    }
    if (!passwordSchema.safeParse(password).success) {
      setToast({
        text: "Invalid password",
        type: "warning",
      });
      return;
    }
    if (email && password) dispatch(loginAsync({ email, password }));
  };

  return (
    <form id={`${id}-form`} onSubmit={handleSubmit}>
      <input id={`${id}-email`} type="email" ref={emailRef} />
      <input id={`${id}-password`} type="password" ref={passwordRef} />
      <button id={`${id}-submit`} type="submit">
        Login
      </button>
    </form>
  );
};
