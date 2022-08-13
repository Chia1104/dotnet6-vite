import { type FC } from "react";
import { Capacity } from "@geist-ui/core";
import { getItemColor } from "@chia/util/services";

interface Props {
  title: string;
  value: number;
}

const UserStateCard: FC<Props> = (props) => {
  const { title, value } = props;

  return (
    <div className="w-full h-[100px] c-bg-gradient-purple-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-5 flex flex-col justify-center items-center overflow-hidden">
        <p className="text-xl mb-1">{title}</p>
        <div className="w-full flex justify-center items-center">
          <Capacity value={value} color={getItemColor(value)} width="80%" />
          <p className="text-center ml-5">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStateCard;
