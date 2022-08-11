export interface IActionSheetState {
  drawer: {
    isOpen: boolean;
  };
}

export const actionSheetInitState: IActionSheetState = {
  drawer: {
    isOpen: false,
  },
};
