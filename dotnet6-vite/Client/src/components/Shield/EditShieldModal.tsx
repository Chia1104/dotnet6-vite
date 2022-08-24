import { type FC, useEffect } from "react";
import EditItemModal from "@chia/components/Modal/EditItem";
import EditShieldList from "./EditShieldList";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { getAllShieldsAsync } from "@chia/store/modules/Shield/actions";
import { selectAllShields } from "@chia/store/modules/Shield";
import type { Shield } from "@chia/shared/types";
import {
  selectActionSheet,
  activeEditShieldModal,
} from "@chia/store/modules/ActionSheet";

import { Loading } from "@geist-ui/core";

const EditShieldModal: FC = () => {
  const dispatch = useAppDispatch();
  const shields = useAppSelector(selectAllShields);
  const actionSheet = useAppSelector(selectActionSheet);

  useEffect(() => {
    if (!shields.data.data && actionSheet.editShieldModal.isOpen)
      dispatch(getAllShieldsAsync());
  }, [actionSheet.editShieldModal.isOpen]);

  return (
    <EditItemModal
      isOpen={actionSheet.editShieldModal.isOpen}
      onClose={() => dispatch(activeEditShieldModal())}
      title={"Shield"}>
      {shields.loading === "pending" && <Loading>Loading</Loading>}
      {shields.loading === "succeeded" && (
        // @ts-ignore
        <EditShieldList shields={shields.data.data} />
      )}
    </EditItemModal>
  );
};

export default EditShieldModal;
