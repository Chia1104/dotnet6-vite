import { type FC, useRef } from "react";
import { type Shield } from "@chia/util/types";
import { Capacity, Image } from "@geist-ui/core";
import {
  getLevelImage,
  getItemColor,
  getHeavinessColor,
} from "@chia/util/services";
import { useHover, useReadLocalStorage } from "usehooks-ts";
import { motion } from "framer-motion";
import ButtonPrimary from "@chia/Components/ButtonPrimary";
import { useParams } from "react-router-dom";
import type { LocalUser } from "@chia/util/types";
import { activeEditShieldModal } from "@chia/store/modules/ActionSheet";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";

interface IShieldCard {
  shield?: Shield;
}
interface IShieldInfo {
  isShow: boolean;
  defense: number;
  heaviness: number;
  attack: number;
  haveMoreButton?: boolean;
}

const ShieldCard: FC<IShieldCard> = (props) => {
  const { shield } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <ShieldInfo
          isShow={isHover}
          defense={shield?.defense || 0}
          heaviness={shield?.heaviness || 0}
          attack={shield?.attack || 0}
        />
        <Image
          width="150px"
          height="150px"
          src={shield?.image || ""}
          alt={shield?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(shield?.level)}
            alt={shield?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

const ShieldInfo: FC<IShieldInfo> = (props) => {
  const { isShow, defense, heaviness, attack, haveMoreButton = true } = props;
  const v = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };
  const defenseColor = getItemColor(defense);
  const heavinessColor = getHeavinessColor(heaviness);
  const attackColor = getItemColor(attack);
  const userData = useReadLocalStorage<LocalUser>("userData");
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial={"closed"}
      animate={isShow ? "open" : "closed"}
      variants={v}
      className="w-full h-full bg-gradient-to-b from-gray-600/70 to-gray-600/0 absolute top-0 left-0 flex flex-col justify-center items-center z-20 p-5">
      <p className="text-base self-start mb-1">Defense</p>
      <Capacity value={defense} color={defenseColor} width="100%" />
      <p className="text-base self-start mb-1">Heaviness</p>
      <Capacity value={heaviness} color={heavinessColor} width="100%" />
      <p className="text-base self-start mb-1">Attack</p>
      <Capacity value={attack} color={attackColor} width="100%" />
      {haveMoreButton && (
        <>
          <div className="mt-5">
            <ButtonPrimary>MORE</ButtonPrimary>
          </div>
          {
            // @ts-ignore
            userData.userId === userId && (
              <div className="mt-5">
                <ButtonPrimary
                  onClick={() => dispatch(activeEditShieldModal())}>
                  EDIT
                </ButtonPrimary>
              </div>
            )
          }
        </>
      )}
    </motion.div>
  );
};

export const ShieldItem: FC<IShieldCard> = (props) => {
  const { shield } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <ShieldInfo
          isShow={isHover}
          defense={shield?.defense || 0}
          heaviness={shield?.heaviness || 0}
          attack={shield?.attack || 0}
          haveMoreButton={false}
        />
        <Image
          width="150px"
          height="150px"
          src={shield?.image || ""}
          alt={shield?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(shield?.level)}
            alt={shield?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default ShieldCard;
