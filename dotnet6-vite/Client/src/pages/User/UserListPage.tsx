import { type FC, useEffect } from "react";
import UserList, { UserListLoader } from "@chia/Components/UserList";
import { selectAllUsers } from "@chia/store/modules/User";
import { getAllUsersAsync } from "@chia/store/modules/User/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useReadLocalStorage } from "usehooks-ts";
import type { LocalUser } from "@chia/util/types";

const UserListPage: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const userData = useReadLocalStorage<LocalUser>("userData");
  useEffect(() => {
    if (!users.data.data)
      dispatch(getAllUsersAsync(userData?.accessToken || ""));
  }, []);
  return (
    <div className="c-main c-container">
      <h1 className="my-20">
        <span className="c-title">All Players</span>
      </h1>
      {users.loading === "pending" && <UserListLoader />}
      {users.loading === "succeeded" && (
        // @ts-ignore
        <UserList users={users.data.data} />
      )}
    </div>
  );
};

export default UserListPage;
