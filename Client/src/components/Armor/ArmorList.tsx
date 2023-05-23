import { type FC } from "react";
import { ArmorItem } from "./Armor";
import type { Armor } from "@chia/shared/types";

interface Props {
  armors: Armor[];
}

const ArmorList: FC<Props> = (props) => {
  const { armors } = props;
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      {armors.map((armor) => (
        <div key={armor.armorId} className="flex flex-col w-full">
          <h2 className="c-subtitle m-2 c-text-bg-primary-half self-center">
            {armor.name}
          </h2>
          <ArmorItem armor={armor} />
        </div>
      ))}
    </div>
  );
};

export default ArmorList;
