import { type FC, useEffect } from "react";
import { selectUser } from "@chia/store/modules/User";
import { getUserAsync } from "@chia/store/modules/User/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useLocalStorage } from "usehooks-ts";
import { useParams, Navigate } from "react-router-dom";
import UserDetail from "@chia/Components/UserDetail";

const UserDetailPage: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [userData, setUserData] = useLocalStorage("userData", null);
  const { userId } = useParams();
  useEffect(() => {
    // @ts-ignore
    dispatch(getUserAsync({ token: userData.accessToken, id: userId }));
  }, []);

  return (
    <div className="c-main c-container">
      {
        // @ts-ignore
        user.loading === "succeeded" && <UserDetail user={user.data.data} />
      }
      {user.loading === "pending" && <div>Loading...</div>}
      {user.loading === "failed" && (
        <Navigate to={"/404"} state={{ from: location }} />
      )}
    </div>
  );
};

export default UserDetailPage;
