import { type FC } from "react";
import { HeadgearItem } from "./Headgear";
import type { Headgear, LocalUser } from "@chia/shared/types";
import ButtonPrimary from "@chia/components/ButtonPrimary";
import { useReadLocalStorage } from "usehooks-ts";

import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import {
  postUserHeadgearAsync,
  deleteUserHeadgearAsync,
} from "@chia/store/modules/User/actions";
import { activeEditHeadgearModal } from "@chia/store/modules/ActionSheet";

interface Props {
  headgears: Headgear[];
}

const EditHeadgearList: FC<Props> = (props) => {
  const { headgears } = props;
  const userData = useReadLocalStorage<LocalUser>("userData");
  const dispatch = useAppDispatch();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="self-center text-center">
        <ButtonPrimary
          onClick={() => {
            // @ts-ignore
            dispatch(deleteUserHeadgearAsync({ token: userData.accessToken }));
            dispatch(activeEditHeadgearModal());
          }}>
          Remove
        </ButtonPrimary>
      </div>
      {headgears.map((headgear) => (
        <div key={headgear.headgearId} className="flex flex-col w-full">
          <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
            {headgear.name}
          </h2>
          <HeadgearItem headgear={headgear} />
          <div className="self-center mt-5">
            <ButtonPrimary
              onClick={() => {
                dispatch(
                  postUserHeadgearAsync({
                    // @ts-ignore
                    token: userData.accessToken,
                    headgearId: headgear.headgearId,
                  })
                );
                dispatch(activeEditHeadgearModal());
              }}>
              Equip
            </ButtonPrimary>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditHeadgearList;
