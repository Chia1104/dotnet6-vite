import { type FC } from "react";
import type { User } from "@chia/util/types";
import UserItem from "./UserItem";

interface Props {
  users: User[];
}

const UserList: FC<Props> = ({ users }) => {
  return (
    <div className="w-full c-bg-secondary rounded-2xl shadow-2xl overflow-hidden">
      {users.map((user) => (
        <UserItem key={user.userId} user={user} />
      ))}
    </div>
  );
};

export default UserList;
