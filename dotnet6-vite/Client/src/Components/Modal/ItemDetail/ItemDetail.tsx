import { type FC } from "react";
import { Modal, Image } from "@geist-ui/core";
import type { Armor, Headgear, Shield, Weapon } from "@chia/util/types";
import StateCard from "@chia/Components/StateCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  data: Armor | Headgear | Shield | Weapon | any;
}

const ItemDetail: FC<Props> = (props) => {
  const { isOpen, onClose, title, subtitle, data } = props;

  return (
    <Modal visible={isOpen} onClose={onClose} width={"900px"}>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Subtitle>{subtitle}</Modal.Subtitle>
      <Modal.Content>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            width="150px"
            height="150px"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="w-full md:w-[500px] lg:w-[800px] mx-auto grid grid-cols-2 gap-10 mt-10">
          <StateCard title={"LEVEL"} value={data.level} />
          {data.attack && <StateCard title={"ATTACK"} value={data.attack} />}
          <StateCard title={"DEFENSE"} value={data.defense} />
          <StateCard title={"HEAVINESS"} value={data.heaviness} />
        </div>
        <p>{data.description}</p>
      </Modal.Content>
      <Modal.Action passive onClick={onClose}>
        Close
      </Modal.Action>
    </Modal>
  );
};

export default ItemDetail;
