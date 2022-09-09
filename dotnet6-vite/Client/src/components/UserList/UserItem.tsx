import { type FC } from "react";
import type { User } from "@chia/shared/types";
import { getRoleImage } from "@chia/util";
import { Avatar } from "@chia/components";
import Anonymous from "@chia/assets/anonymous.png";
import { useNavigate, Link } from "react-router-dom";

interface Props {
  user: User;
}

const UserItem: FC<Props> = ({ user }) => {
  const armorLevel = user.armor?.level || 0;
  const weaponLevel = user.weapon?.level || 0;
  const shieldLevel = user.shield?.level || 0;
  const headgearLevel = user.headgear?.level || 0;
  const level = armorLevel + weaponLevel + shieldLevel + headgearLevel;
  const navigate = useNavigate();
  return (
    <Link
      to={`/users/${user.userId}`}
      className="w-full h-[100px] p-5 flex items-center hover:bg-primary transition ease-in-out border-b-2 c-border-primary">
      <Avatar
        width="70px"
        height="70px"
        // @ts-ignore
        src={user ? getRoleImage(user.role) : Anonymous}
        onClick={() => navigate(`/users/${user.userId}`)}
      />
      <div className="ml-5 flex flex-col">
        <span className="flex items-center">
          <h3 className="c-subtitle">{user.name}</h3>
          <span className="c-description mx-3"> . </span>
          <p className="c-description">LV: {level}</p>
        </span>
      </div>
    </Link>
  );
};

export default UserItem;
