import { type FC, type ReactNode } from "react";
import { type User } from "@chia/shared/types";
import { getRoleImage } from "@chia/util";
import Armor from "@chia/components/Armor";
import Headgear from "@chia/components/Headgear";
import Shield from "@chia/components/Shield";
import Weapon from "@chia/components/Weapon";
import Anonymous from "@chia/assets/anonymous.png";
import Avatar from "@chia/components/Avatar";
import StateCard from "@chia/components/StateCard";
import { useReadLocalStorage } from "usehooks-ts";
import { useParams } from "react-router-dom";
import ButtonPrimary from "@chia/components/ButtonPrimary";
import type { LocalUser } from "@chia/shared/types";
import {
  activeEditArmorModal,
  activeEditHeadgearModal,
  activeEditShieldModal,
  activeEditWeaponModal,
} from "@chia/store/modules/ActionSheet";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";

interface Props {
  user: User;
  children?: ReactNode;
}

const UserDetail: FC<Props> = (props) => {
  const { user, children } = props;
  const roleImage = getRoleImage(user.role);
  const armorLevel = user.armor?.level || 0;
  const weaponLevel = user.weapon?.level || 0;
  const shieldLevel = user.shield?.level || 0;
  const headgearLevel = user.headgear?.level || 0;
  const level = armorLevel + weaponLevel + shieldLevel + headgearLevel;
  const attack = (user.weapon?.attack || 0) + (user.shield?.attack || 0);
  const defense =
    (user.armor?.defense || 0) +
    (user.headgear?.defense || 0) +
    (user.shield?.defense || 0) +
    (user.weapon?.defense || 0);
  const heaviness =
    (user.armor?.heaviness || 0) +
    (user.headgear?.heaviness || 0) +
    (user.shield?.heaviness || 0) +
    (user.weapon?.heaviness || 0);
  const userData = useReadLocalStorage<LocalUser>("userData");
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  return (
    <div className="w-full c-bg-secondary rounded-2xl shadow-2xl overflow-hidden p-10">
      <div className="w-full pb-10 border-b-2 c-border-primary flex flex-col">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10">
          <div className="flex justify-center items-center">
            <Avatar
              width="150px"
              height="150px"
              src={user ? roleImage : Anonymous}
              text={user?.name || "Anonymous"}
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center items-start">
            <h1 className="c-title">
              {user?.name || "Anonymous"}
              <span className="c-description mx-3"> . </span>
              LV: {level}
            </h1>
            <h2 className="c-subtitle">{user?.email || ""}</h2>
          </div>
        </div>
        <div className="w-full md:w-[500px] lg:w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <StateCard title={"LEVEL"} value={level} />
          <StateCard title={"ATTACK"} value={attack} />
          <StateCard title={"DEFENSE"} value={defense} />
          <StateCard title={"HEAVINESS"} value={heaviness} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {user.armor ? (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
              {user.armor.name}
            </h2>
            <Armor armor={user.armor} />
          </div>
        ) : (
          // @ts-ignore
          userData.userId === userId && (
            <div className="flex flex-col w-[200px] mx-auto p-5 h-full">
              <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
                Armor
              </h2>
              <ButtonPrimary onClick={() => dispatch(activeEditArmorModal())}>
                EDIT
              </ButtonPrimary>
            </div>
          )
        )}
        {user.headgear ? (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
              {user.headgear.name}
            </h2>
            <Headgear headgear={user.headgear} />
          </div>
        ) : (
          // @ts-ignore
          userData.userId === userId && (
            <div className="flex flex-col w-[200px] mx-auto p-5">
              <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
                Headgear
              </h2>
              <ButtonPrimary
                onClick={() => dispatch(activeEditHeadgearModal())}>
                EDIT
              </ButtonPrimary>
            </div>
          )
        )}
        {user.shield ? (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
              {user.shield.name}
            </h2>
            <Shield shield={user.shield} />
          </div>
        ) : (
          // @ts-ignore
          userData.userId === userId && (
            <div className="flex flex-col w-[200px] mx-auto p-5">
              <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
                Shield
              </h2>
              <ButtonPrimary onClick={() => dispatch(activeEditShieldModal())}>
                EDIT
              </ButtonPrimary>
            </div>
          )
        )}
        {user.weapon ? (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
              {user.weapon.name}
            </h2>
            <Weapon weapon={user.weapon} />
          </div>
        ) : (
          // @ts-ignore
          userData.userId === userId && (
            <div className="flex flex-col w-[200px] mx-auto p-5">
              <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
                Weapon
              </h2>
              <ButtonPrimary onClick={() => dispatch(activeEditWeaponModal())}>
                EDIT
              </ButtonPrimary>
            </div>
          )
        )}
      </div>
      {children}
    </div>
  );
};

export default UserDetail;
