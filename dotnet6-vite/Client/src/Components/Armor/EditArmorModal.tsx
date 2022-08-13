import { type FC, useEffect } from "react";
import EditItemModal from "@chia/Components/Modal/EditItem";
import EditArmorList from "./EditArmorList";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { getAllArmorsAsync } from "@chia/store/modules/Armor/actions";
import { selectAllArmors } from "@chia/store/modules/Armor";
import type { Armor } from "@chia/util/types";
import { selectActionSheet } from "@chia/store/modules/ActionSheet";
import { activeEditArmorModal } from "@chia/store/modules/ActionSheet";
import { Loading } from "@geist-ui/core";

const EditArmorModal: FC = () => {
  const dispatch = useAppDispatch();
  const armors = useAppSelector(selectAllArmors);
  const actionSheet = useAppSelector(selectActionSheet);

  useEffect(() => {
    if (!armors.data.data && actionSheet.editArmorModal.isOpen)
      dispatch(getAllArmorsAsync());
  }, [actionSheet.editArmorModal.isOpen]);

  return (
    <EditItemModal
      isOpen={actionSheet.editArmorModal.isOpen}
      onClose={() => dispatch(activeEditArmorModal())}
      title={"Armor"}>
      {armors.loading === "pending" && <Loading>Loading</Loading>}
      {armors.loading === "succeeded" && (
        // @ts-ignore
        <EditArmorList armors={armors.data.data} />
      )}
    </EditItemModal>
  );
};

export default EditArmorModal;
