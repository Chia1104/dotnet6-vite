﻿import { type FC, useEffect } from "react";
import EditItemModal from "@chia/Components/Modal/EditItem";
import EditWeaponList from "./EditWeaponList";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { getAllWeaponsAsync } from "@chia/store/modules/Weapon/actions";
import { selectAllWeapons } from "@chia/store/modules/Weapon";
import type { Weapon } from "@chia/util/types";
import { selectActionSheet } from "@chia/store/modules/ActionSheet";
import { activeEditWeaponModal } from "@chia/store/modules/ActionSheet";
import { Loading } from "@geist-ui/core";

const EditWeaponModal: FC = () => {
  const dispatch = useAppDispatch();
  const weapons = useAppSelector(selectAllWeapons);
  const actionSheet = useAppSelector(selectActionSheet);

  useEffect(() => {
    if (!weapons.data.data && actionSheet.editWeaponModal.isOpen)
      dispatch(getAllWeaponsAsync());
  }, [actionSheet.editWeaponModal.isOpen]);

  return (
    <EditItemModal
      isOpen={actionSheet.editWeaponModal.isOpen}
      onClose={() => dispatch(activeEditWeaponModal())}
      title={"Weapon"}>
      {weapons.loading === "pending" && <Loading>Loading</Loading>}
      {weapons.loading === "succeeded" && (
        // @ts-ignore
        <EditWeaponList weapons={weapons.data.data} />
      )}
    </EditItemModal>
  );
};

export default EditWeaponModal;
