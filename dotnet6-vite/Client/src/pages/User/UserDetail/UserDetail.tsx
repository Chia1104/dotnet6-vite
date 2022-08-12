import { type FC, useEffect } from "react";
import { selectUser } from "@chia/store/modules/User";
import { getUserAsync } from "@chia/store/modules/User/actions";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useReadLocalStorage } from "usehooks-ts";
import { useParams, Navigate } from "react-router-dom";
import UserDetail from "@chia/Components/UserDetail";
import { Loading } from "@geist-ui/core";
import GameStory from "@chia/Components/Animation/GameStory/GameStory";
import type { LocalUser } from "@chia/util/types";
import { EditArmorModal } from "@chia/Components/Items/Armor";
import { EditHeadgearModal } from "@chia/Components/Items/Headgear";
import { EditShieldModal } from "@chia/Components/Items/Shield";
import { EditWeaponModal } from "@chia/Components/Items/Weapon";

const UserDetailPage: FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const userData = useReadLocalStorage<LocalUser>("userData");
  const { userId } = useParams();

  useEffect(() => {
    // @ts-ignore
    dispatch(getUserAsync({ token: userData.accessToken, id: userId }));
  }, []);

  return (
    <div className="c-main c-container">
      <div className="w-full flex justify-center items-end fixed bottom-0 -z-10 brightness-50">
        <GameStory />
      </div>
      {
        // @ts-ignore
        user.loading === "succeeded" && <UserDetail user={user.data.data} />
      }
      {user.loading === "pending" && <Loading>Loading</Loading>}
      {user.loading === "failed" && (
        <Navigate to={"/404"} state={{ from: location }} />
      )}
      <EditArmorModal />
      <EditHeadgearModal />
      <EditShieldModal />
      <EditWeaponModal />
    </div>
  );
};

export default UserDetailPage;
