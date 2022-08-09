import { type FC } from "react";
import type { User } from "@chia/util/types";

interface Props {
  user: User;
}

const UserItem: FC<Props> = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserItem;
