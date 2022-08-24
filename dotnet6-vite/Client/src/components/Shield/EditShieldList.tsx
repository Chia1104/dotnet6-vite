import { type FC } from "react";
import { ShieldItem } from "./Shield";
import type { Shield, LocalUser } from "@chia/shared/types";
import ButtonPrimary from "@chia/components/ButtonPrimary";
import { useReadLocalStorage } from "usehooks-ts";

import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import {
  postUserShieldAsync,
  deleteUserShieldAsync,
} from "@chia/store/modules/User/actions";
import { activeEditShieldModal } from "@chia/store/modules/ActionSheet";

interface Props {
  shields: Shield[];
}

const EditShieldList: FC<Props> = (props) => {
  const { shields } = props;
  const userData = useReadLocalStorage<LocalUser>("userData");
  const dispatch = useAppDispatch();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="self-center text-center">
        <ButtonPrimary
          onClick={() => {
            // @ts-ignore
            dispatch(deleteUserShieldAsync({ token: userData.accessToken }));
            dispatch(activeEditShieldModal());
          }}>
          Remove
        </ButtonPrimary>
      </div>
      {shields.map((shield) => (
        <div key={shield.shieldId} className="flex flex-col w-full">
          <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
            {shield.name}
          </h2>
          <ShieldItem shield={shield} />
          <div className="self-center mt-5">
            <ButtonPrimary
              onClick={() => {
                dispatch(
                  postUserShieldAsync({
                    // @ts-ignore
                    token: userData.accessToken,
                    shieldId: shield.shieldId,
                  })
                );
                dispatch(activeEditShieldModal());
              }}>
              Equip
            </ButtonPrimary>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditShieldList;
