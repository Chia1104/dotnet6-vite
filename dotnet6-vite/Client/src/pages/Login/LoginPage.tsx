import { type FC, useId, type FormEvent, useRef, useEffect } from "react";
import { emailSchema, passwordSchema } from "@chia/util/types";
import { useToasts, Page } from "@geist-ui/core";
import { selectAuthData, selectLoginState } from "@chia/store/modules/Auth";
import { loginAsync } from "@chia/store/modules/Auth/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import EmailInput from "@chia/Components/EmailInput";
import PasswordInput from "@chia/Components/PasswordInput";
import Button from "@chia/Components/Button";

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
        text: "Invalid email format",
        type: "warning",
      });
      return;
    }
    if (!passwordSchema.safeParse(password).success) {
      setToast({
        text: "Password must be at least 6 characters",
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
    <div className="c-main c-container">
      <div className="w-full md:w-[700px] rounded-lg py-10 px-20 c-bg-secondary shadow-xl">
        <form
          className="w-full flex flex-col"
          id={`${id}-form`}
          onSubmit={handleSubmit}>
          {loginState.loading === "pending" && <h1>LOADING!!!</h1>}
          <EmailInput
            error="Invalid email format"
            placeholder="Email"
            ref={emailRef}
          />
          <PasswordInput
            error="Password must be at least 6 characters"
            placeholder="Password"
            ref={passwordRef}
          />
          <div className="self-center my-4">
            <Button text="Login" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
