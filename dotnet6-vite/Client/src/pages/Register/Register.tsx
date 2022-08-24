import {
  type FC,
  useId,
  type FormEvent,
  useRef,
  useEffect,
  useState,
} from "react";
import { type Role, type LocalUser } from "@chia/shared/types";
import { NameSchema, EmailSchema, PasswordSchema } from "@chia/shared/schemas";
import { useToasts, Spacer, Radio, Image } from "@geist-ui/core";
import { selectAuthData, selectRegisterState } from "@chia/store/modules/Auth";
import { registerAsync } from "@chia/store/modules/Auth/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useLocalStorage } from "usehooks-ts";
import { Link, useNavigate } from "react-router-dom";
import EmailInput from "@chia/components/EmailInput";
import PasswordInput from "@chia/components/PasswordInput";
import Button from "@chia/components/Button";
import Spinner from "@chia/components/Spinner";
import Back from "@chia/components/Icons/Back";
import ConfirmPassword from "@chia/components/ConfirmPassword";
import Input from "@chia/components/Input";

const RegisterPage: FC = () => {
  const { setToast } = useToasts();
  const id = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const registerState = useAppSelector(selectRegisterState);
  const authData = useAppSelector(selectAuthData);
  const [userData, setUserData] = useLocalStorage(
    "userData",
    null as LocalUser | null
  );
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [role, setRole] = useState<Role>("Archer");

  const onChange = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const name = nameRef.current?.value;
    setDisable(
      !(
        EmailSchema.safeParse(email).success &&
        PasswordSchema.safeParse(password).success &&
        password === confirmPassword &&
        NameSchema.safeParse(name).success
      )
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const name = nameRef.current?.value;
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
    if (password !== confirmPassword) {
      setToast({
        text: "Password and confirm password must be same",
        type: "warning",
      });
      return;
    }
    if (!NameSchema.safeParse(name).success) {
      setToast({
        text: "Name must be between 1 and 10 characters",
        type: "warning",
      });
      return;
    }

    dispatch(
      registerAsync({
        // @ts-ignore
        email,
        // @ts-ignore
        password,
        // @ts-ignore
        name,
        role,
      })
    );
  };

  useEffect(() => {
    if (registerState.loading === "succeeded") {
      setToast({
        text: "Register succeeded",
        type: "success",
      });
      navigate("/");
      // @ts-ignore
      setUserData(authData.auth.data);
    }
    if (registerState.loading === "failed")
      setToast({
        text: registerState.error || "Register failed",
        type: "warning",
      });
  }, [registerState.loading]);

  return (
    <div className="c-main c-container">
      <div className="w-full md:w-[700px] rounded-lg py-10 px-20 c-bg-secondary shadow-xl overflow-hidden flex flex-col">
        <button onClick={() => navigate("/")} className="flex group">
          <Back />
          <p className="group-hover:translate-x-2 transition ease-in-out c-text-bg-primary-half">
            Go back
          </p>
        </button>
        <form
          className="w-full flex flex-col mt-10"
          id={`${id}-form`}
          onChange={onChange}
          onSubmit={handleSubmit}>
          {registerState.loading === "pending" && <Spinner />}
          <Input
            title={"Name"}
            error={"Name must be between 1 and 10 characters"}
            schema={NameSchema}
            type={"text"}
            ref={nameRef}
          />
          <Spacer />
          <EmailInput
            title="Email"
            error="Invalid email format"
            placeholder="Email"
            ref={emailRef}
          />
          <Spacer />
          <PasswordInput
            title="Password"
            error="Password must be at least 6 characters"
            placeholder="Password"
            ref={passwordRef}
          />
          <Spacer />
          <ConfirmPassword
            ref={confirmPasswordRef}
            title={"Confirm Password"}
            error={"Must be equal to password"}
            placeholder={"Confirm Password"}
            refTarget={passwordRef}
          />
          <Spacer />
          <label className="text-2xl font-bold">Role</label>
          <Spacer />
          <Radio.Group
            value="1"
            onChange={(val) => setRole(val as Role)}
            initialValue="Archer">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 flex justify-center items-center">
              <Radio value="Archer">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Farcher.png?alt=media"
                  alt="Archer"
                />
                <Radio.Description>Archer</Radio.Description>
              </Radio>
              <Radio value="Warrior">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwarrior.png?alt=media"
                  alt="Warrior"
                />
                <Radio.Desc>Warrior</Radio.Desc>
              </Radio>
              <Radio value="Knight">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fknight.png?alt=media"
                  alt="Knight"
                />
                <Radio.Description>Knight</Radio.Description>
              </Radio>
              <Radio value="Monk">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fmonk.png?alt=media"
                  alt="Monk"
                />
                <Radio.Description>Monk</Radio.Description>
              </Radio>
              <Radio value="Wizard">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwizard.png?alt=media"
                  alt="Wizard"
                />
                <Radio.Desc>Wizard</Radio.Desc>
              </Radio>
              <Radio value="Ninja">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fninja.png?alt=media"
                  alt="Ninja"
                />
                <Radio.Description>Ninja</Radio.Description>
              </Radio>
              <Radio value="Sekiro">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fskerio.png?alt=media"
                  alt="Sekiro"
                />
                <Radio.Desc>Sekiro</Radio.Desc>
              </Radio>
              <Radio value="Thief">
                <Image
                  width="70px"
                  height="70px"
                  src="https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fthief.png?alt=media"
                  alt="Thief"
                />
                <Radio.Desc>Thief</Radio.Desc>
              </Radio>
            </div>
          </Radio.Group>
          <Spacer />
          <div className="self-center my-4">
            <Button text="Register" type="submit" disabled={disable} />
          </div>
        </form>
        <Link to={"/login"} className="text-center my-4 c-link self-center">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
