import { IActionSheetState } from "@chia/store/modules/ActionSheet/state";

export const actionSheetReducer = {
  activeDrawer: (state: IActionSheetState) => {
    state.drawer.isOpen = !state.drawer.isOpen;
  },
};
