import {
  type FC,
  useId,
  type FormEvent,
  useRef,
  useEffect,
  useState,
} from "react";
import { EmailSchema, PasswordSchema } from "@chia/shared/schemas";
import { useToasts } from "@geist-ui/core";
import { selectAuthData, selectLoginState } from "@chia/store/modules/Auth";
import { loginAsync } from "@chia/store/modules/Auth/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useLocalStorage } from "usehooks-ts";
import { Link, useNavigate } from "react-router-dom";
import { EmailInput, PasswordInput, Button, Spinner } from "@chia/components";
import { GameStory } from "@chia/components/Animation";
import { Back } from "@chia/components/Icons";
import type { LocalUser } from "@chia/shared/types";

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
  const [disable, setDisable] = useState(true);

  const onChange = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    setDisable(
      !(
        EmailSchema.safeParse(email).success &&
        PasswordSchema.safeParse(password).success
      )
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!EmailSchema.safeParse(email).success) {
      setToast({
        text: "Invalid email format",
        type: "warning",
      });
      return;
    }
    if (!PasswordSchema.safeParse(password).success) {
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
        text: loginState.error || "Login failed",
        type: "warning",
      });
  }, [loginState.loading]);

  return (
    <div className="c-main c-container">
      <div className="w-full md:w-[700px] rounded-lg py-10 px-20 c-bg-secondary shadow-xl overflow-hidden flex flex-col">
        <button onClick={() => navigate("/")} className="flex group">
          <Back />
          <p className="group-hover:translate-x-2 transition ease-in-out c-text-bg-primary-half">
            Go back
          </p>
        </button>
        <GameStory />
        <form
          className="w-full flex flex-col"
          id={`${id}-form`}
          onChange={onChange}
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
            <Button text="Login" type="submit" disabled={disable} />
          </div>
        </form>
        <Link to={"/register"} className="text-center my-4 c-link self-center">
          Don't have an account? Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
