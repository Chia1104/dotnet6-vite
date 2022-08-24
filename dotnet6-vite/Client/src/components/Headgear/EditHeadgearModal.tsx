import { type FC, useEffect } from "react";
import EditItemModal from "@chia/components/Modal/EditItem";
import EditHeadgearList from "./EditHeadgearList";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { getAllHeadgearAsync } from "@chia/store/modules/Headgear/actions";
import { selectAllHeadgear } from "@chia/store/modules/Headgear";
import type { Headgear } from "@chia/shared/types";
import {
  selectActionSheet,
  activeEditHeadgearModal,
} from "@chia/store/modules/ActionSheet";

import { Loading } from "@geist-ui/core";

const EditHeadgearrModal: FC = () => {
  const dispatch = useAppDispatch();
  const headgears = useAppSelector(selectAllHeadgear);
  const actionSheet = useAppSelector(selectActionSheet);

  useEffect(() => {
    if (!headgears.data.data && actionSheet.editHeadgearModal.isOpen)
      dispatch(getAllHeadgearAsync());
  }, [actionSheet.editHeadgearModal.isOpen]);

  return (
    <EditItemModal
      isOpen={actionSheet.editHeadgearModal.isOpen}
      onClose={() => dispatch(activeEditHeadgearModal())}
      title={"Headgear"}>
      {headgears.loading === "pending" && <Loading>Loading</Loading>}
      {headgears.loading === "succeeded" && (
        // @ts-ignore
        <EditHeadgearList headgears={headgears.data.data} />
      )}
    </EditItemModal>
  );
};

export default EditHeadgearrModal;
