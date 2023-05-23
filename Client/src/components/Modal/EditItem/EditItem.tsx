import { type FC, type ReactNode } from "react";
import { Modal } from "@geist-ui/core";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const EditItem: FC<Props> = (props) => {
  const { isOpen, onClose, title, subtitle, children } = props;

  return (
    <Modal visible={isOpen} onClose={onClose} width={"900px"}>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Subtitle>{subtitle}</Modal.Subtitle>
      <Modal.Content>
        <div className="w-full h-[500px] overflow-auto p-12">{children}</div>
      </Modal.Content>
      <Modal.Action passive onClick={onClose}>
        Cancel
      </Modal.Action>
    </Modal>
  );
};

export default EditItem;
