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
import Spinner from "@chia/Components/Spinner";
import GameStory from "@chia/Components/Animation/GameStory";
import Back from "@chia/Components/Icons/Back";
import type { LocalUser } from "@chia/util/types";

const LoginPage: FC = () => {
  const { setToast } = useToasts();
  const id = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const loginState = useAppSelector(selectLoginState);
  const authData = useAppSelector(selectAuthData);
  const [userData, setUserData] = useLocalStorage(
    "userData",
    null as LocalUser | null
  );
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
      <div className="w-full md:w-[700px] rounded-lg py-10 px-20 c-bg-secondary shadow-xl overflow-hidden">
        <button onClick={() => navigate(-1)} className="flex group">
          <Back />
          <p className="group-hover:translate-x-2 transition ease-in-out c-text-bg-primary-half">
            Go back
          </p>
        </button>
        <GameStory />
        <form
          className="w-full flex flex-col"
          id={`${id}-form`}
          onSubmit={handleSubmit}>
          {loginState.loading === "pending" && <Spinner />}
          <EmailInput
            title="Email"
            error="Invalid email format"
            placeholder="Email"
            ref={emailRef}
          />
          <PasswordInput
            title="Password"
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
