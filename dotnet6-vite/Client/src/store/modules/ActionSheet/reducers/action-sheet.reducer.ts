import { IActionSheetState } from "@chia/store/modules/ActionSheet/state";

export const actionSheetReducer = {
  activeDrawer: (state: IActionSheetState) => {
    state.drawer.isOpen = !state.drawer.isOpen;
  },
  activeEditArmorModal: (state: IActionSheetState) => {
    state.editArmorModal.isOpen = !state.editArmorModal.isOpen;
  },
  activeEditWeaponModal: (state: IActionSheetState) => {
    state.editWeaponModal.isOpen = !state.editWeaponModal.isOpen;
  },
  activeEditHeadgearModal: (state: IActionSheetState) => {
    state.editHeadgearModal.isOpen = !state.editHeadgearModal.isOpen;
  },
  activeEditShieldModal: (state: IActionSheetState) => {
    state.editShieldModal.isOpen = !state.editShieldModal.isOpen;
  },
};
