import { type FC } from "react";
import { ArmorItem } from "./Armor";
import type { Armor, LocalUser } from "@chia/shared/types";
import { ButtonPrimary } from "@chia/components";
import { useReadLocalStorage } from "usehooks-ts";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import {
  postUserArmorAsync,
  deleteUserArmorAsync,
} from "@chia/store/modules/User/actions";
import { activeEditArmorModal } from "@chia/store/modules/ActionSheet";

interface Props {
  armors: Armor[];
}

const EditArmorList: FC<Props> = (props) => {
  const { armors } = props;
  const userData = useReadLocalStorage<LocalUser>("userData");
  const dispatch = useAppDispatch();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="self-center text-center">
        <ButtonPrimary
          onClick={() => {
            // @ts-ignore
            dispatch(deleteUserArmorAsync({ token: userData.accessToken }));
            dispatch(activeEditArmorModal());
          }}>
          Remove
        </ButtonPrimary>
      </div>
      {armors.map((armor) => (
        <div key={armor.armorId} className="flex flex-col w-full">
          <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
            {armor.name}
          </h2>
          <ArmorItem armor={armor} />
          <div className="self-center mt-5">
            <ButtonPrimary
              onClick={() => {
                dispatch(
                  postUserArmorAsync({
                    // @ts-ignore
                    token: userData.accessToken,
                    armorId: armor.armorId,
                  })
                );
                dispatch(activeEditArmorModal());
              }}>
              Equip
            </ButtonPrimary>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditArmorList;
