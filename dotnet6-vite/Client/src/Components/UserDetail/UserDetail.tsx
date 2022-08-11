import { type FC } from "react";
import { type User } from "@chia/util/types";
import { getRoleImage } from "@chia/util/services";
import Armor from "@chia/Components/Items/Armor";
import Headgear from "@chia/Components/Items/Headgear";
import Shield from "@chia/Components/Items/Shield";
import Weapon from "@chia/Components/Items/Weapon";
import Anonymous from "@chia/assets/anonymous.png";
import Avatar from "@chia/Components/Avatar";

interface Props {
  user: User;
}

const UserDetail: FC<Props> = (props) => {
  const { user } = props;
  const roleImage = getRoleImage(user.role);
  const armorLevel = user.armor?.level || 0;
  const weaponLevel = user.weapon?.level || 0;
  const shieldLevel = user.shield?.level || 0;
  const headgearLevel = user.headgear?.level || 0;
  const level = armorLevel + weaponLevel + shieldLevel + headgearLevel;
  return (
    <div className="w-full c-bg-secondary rounded-2xl shadow-2xl overflow-hidden p-10">
      <div className="w-full pb-10 border-b-2 c-border-primary grid grid-cols-1 md:grid-cols-3 gap-y-10">
        <div className="flex justify-center items-center">
          <Avatar
            width="150px"
            height="150px"
            src={user ? getRoleImage(user.role) : Anonymous}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {user.armor && (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-start">
              {user.armor.name}
            </h2>
            <Armor armor={user.armor} />
          </div>
        )}
        {user.headgear && (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-start">
              {user.headgear.name}
            </h2>
            <Headgear headgear={user.headgear} />
          </div>
        )}
        {user.shield && (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-start">
              {user.shield.name}
            </h2>
            <Shield shield={user.shield} />
          </div>
        )}
        {user.weapon && (
          <div className="flex flex-col w-full">
            <h2 className="c-subtitle m-2 c-text-bg-primary-half self-start">
              {user.weapon.name}
            </h2>
            <Weapon weapon={user.weapon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
