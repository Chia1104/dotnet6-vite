import { type FC } from "react";
import { WeaponItem } from "./Weapon";
import type { Weapon } from "@chia/util/types";
import ButtonPrimary from "@chia/Components/ButtonPrimary";
import { useReadLocalStorage } from "usehooks-ts";
import type { LocalUser } from "@chia/util/types";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import {
  postUserWeaponAsync,
  deleteUserWeaponAsync,
} from "@chia/store/modules/User/actions";
import { activeEditWeaponModal } from "@chia/store/modules/ActionSheet";

interface Props {
  weapons: Weapon[];
}

const EditWeaponList: FC<Props> = (props) => {
  const { weapons } = props;
  const userData = useReadLocalStorage<LocalUser>("userData");
  const dispatch = useAppDispatch();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="self-center text-center">
        <ButtonPrimary
          onClick={() => {
            // @ts-ignore
            dispatch(deleteUserWeaponAsync({ token: userData.accessToken }));
            dispatch(activeEditWeaponModal());
          }}>
          Remove
        </ButtonPrimary>
      </div>
      {weapons.map((weapon) => (
        <div key={weapon.weaponId} className="flex flex-col w-full">
          <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
            {weapon.name}
          </h2>
          <WeaponItem weapon={weapon} />
          <div className="self-center mt-5">
            <ButtonPrimary
              onClick={() => {
                dispatch(
                  postUserWeaponAsync({
                    // @ts-ignore
                    token: userData.accessToken,
                    weaponId: weapon.weaponId,
                  })
                );
                dispatch(activeEditWeaponModal());
              }}>
              Equip
            </ButtonPrimary>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditWeaponList;
