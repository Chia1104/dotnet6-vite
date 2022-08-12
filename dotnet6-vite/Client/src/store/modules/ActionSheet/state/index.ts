export interface IActionSheetState {
  drawer: {
    isOpen: boolean;
  };
  editArmorModal: {
    isOpen: boolean;
  };
  editWeaponModal: {
    isOpen: boolean;
  };
  editHeadgearModal: {
    isOpen: boolean;
  };
  editShieldModal: {
    isOpen: boolean;
  };
}

export const actionSheetInitState: IActionSheetState = {
  drawer: {
    isOpen: false,
  },
  editArmorModal: {
    isOpen: false,
  },
  editWeaponModal: {
    isOpen: false,
  },
  editHeadgearModal: {
    isOpen: false,
  },
  editShieldModal: {
    isOpen: false,
  },
};
