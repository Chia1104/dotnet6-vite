import { type FC, useId, type FormEvent, useRef, useEffect } from "react";
import { emailSchema, passwordSchema } from "@chia/util/types";
import { useToasts } from "@geist-ui/core";
import { selectAuthData, selectLoginState } from "@chia/store/modules/Auth";
import { loginAsync } from "@chia/store/modules/Auth/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
  const { setToast } = useToasts();
  const id = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const loginState = useAppSelector(selectLoginState);
  const authData = useAppSelector(selectAuthData);
  const [userData, setUserData] = useLocalStorage("userData", null);
  const navigate = useNavigate();

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
    // @ts-ignore
    dispatch(loginAsync({ email, password }));
  };

  useEffect(() => {
    if (loginState.loading === "succeeded") {
      setToast({
        text: "Login succeeded",
        type: "success",
      });
      navigate("/");
      // @ts-ignore
      setUserData(authData.auth.data);
    }
    if (loginState.loading === "failed")
      setToast({
        text: "Login failed",
        type: "warning",
      });
  }, [loginState.loading]);

  return (
    <form id={`${id}-form`} onSubmit={handleSubmit}>
      {loginState.loading === "pending" && <h1>LOADING!!!</h1>}
      <input id={`${id}-email`} type="email" ref={emailRef} />
      <input id={`${id}-password`} type="password" ref={passwordRef} />
      <button id={`${id}-submit`} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
