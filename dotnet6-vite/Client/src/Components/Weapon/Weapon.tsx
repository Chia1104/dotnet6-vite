import { type FC, useRef, memo } from "react";
import { type Weapon } from "@chia/util/types";
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
import { activeEditWeaponModal } from "@chia/store/modules/ActionSheet";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";

interface IWeaponCard {
  weapon?: Weapon;
}
interface IWeaponInfo {
  isShow: boolean;
  attack: number;
  heaviness: number;
  defense: number;
  haveMoreButton?: boolean;
}

const WeaponCard: FC<IWeaponCard> = (props) => {
  const { weapon } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <WeaponInfo
          isShow={isHover}
          attack={weapon?.attack || 0}
          heaviness={weapon?.heaviness || 0}
          defense={weapon?.defense || 0}
        />
        <Image
          width="150px"
          height="150px"
          src={weapon?.image || ""}
          alt={weapon?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(weapon?.level)}
            alt={weapon?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

const WeaponInfo: FC<IWeaponInfo> = (props) => {
  const { isShow, attack, heaviness, defense, haveMoreButton = true } = props;
  const v = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };
  const attackColor = getItemColor(attack);
  const heavinessColor = getHeavinessColor(heaviness);
  const defenseColor = getItemColor(defense);
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
                  onClick={() => dispatch(activeEditWeaponModal())}>
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

export const WeaponItem: FC<IWeaponCard> = (props) => {
  const { weapon } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <WeaponInfo
          isShow={isHover}
          attack={weapon?.attack || 0}
          heaviness={weapon?.heaviness || 0}
          defense={weapon?.defense || 0}
          haveMoreButton={false}
        />
        <Image
          width="150px"
          height="150px"
          src={weapon?.image || ""}
          alt={weapon?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(weapon?.level)}
            alt={weapon?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(WeaponCard, (prevProps, nextProps) => {
  return prevProps.weapon?.image === nextProps.weapon?.image;
});
