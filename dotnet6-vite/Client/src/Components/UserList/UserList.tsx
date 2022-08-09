import { type FC } from "react";
import type { User } from "@chia/util/types";
import UserItem from "./UserItem";

interface Props {
  users: User[];
}

const UserList: FC<Props> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.userId} user={user} />
      ))}
    </div>
  );
};

export default UserList;
