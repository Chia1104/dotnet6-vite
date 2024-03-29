﻿import { type FC, useEffect } from "react";
import {
  selectUser,
  selectUpdateLoading,
  clearUserDetails,
} from "@chia/store/modules/User";
import { getUserAsync } from "@chia/store/modules/User/actions";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useReadLocalStorage } from "usehooks-ts";
import { useParams, Navigate } from "react-router-dom";
import { UserDetail } from "@chia/components";
import { Loading } from "@geist-ui/core";
import { GameStory } from "@chia/components/Animation";
import type { LocalUser } from "@chia/shared/types";
import { EditArmorModal } from "@chia/components/Armor";
import { EditHeadgearModal } from "@chia/components/Headgear";
import { EditShieldModal } from "@chia/components/Shield";
import { EditWeaponModal } from "@chia/components/Weapon";
import Spinner from "@chia/components/Spinner";

const UserDetailPage: FC = () => {
  const user = useAppSelector(selectUser);
  const updateLoading = useAppSelector(selectUpdateLoading);
  const dispatch = useAppDispatch();
  const userData = useReadLocalStorage<LocalUser>("userData");
  const { userId } = useParams();

  useEffect(() => {
    // @ts-ignore
    dispatch(getUserAsync({ token: userData.accessToken, id: userId }));

    return () => {
      dispatch(clearUserDetails());
    };
  }, []);

  return (
    <div className="c-main c-container">
      <div className="w-full flex justify-center items-end fixed bottom-0 -z-10 brightness-50">
        <GameStory />
      </div>
      {user.loading === "succeeded" && (
        // @ts-ignore
        <UserDetail user={user.data.data}>
          {updateLoading === "pending" && <Spinner />}
        </UserDetail>
      )}
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
