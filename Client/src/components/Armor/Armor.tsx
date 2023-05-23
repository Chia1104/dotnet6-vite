import { type FC, useRef, memo } from "react";
import { type Armor } from "@chia/shared/types";
import { Capacity, Image } from "@geist-ui/core";
import { getLevelImage, getItemColor, getHeavinessColor } from "@chia/util";
import { useHover, useReadLocalStorage } from "usehooks-ts";
import { motion } from "framer-motion";
import { ButtonPrimary } from "@chia/components";
import { useParams } from "react-router-dom";
import { activeEditArmorModal } from "@chia/store/modules/ActionSheet";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import type { LocalUser } from "@chia/shared/types";

interface IArmorCard {
  armor?: Armor;
}
interface IArmorInfo {
  isShow: boolean;
  defense: number;
  heaviness: number;
  haveMoreButton?: boolean;
}

const ArmorCard: FC<IArmorCard> = (props) => {
  const { armor } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <ArmorInfo
          isShow={isHover}
          defense={armor?.defense || 0}
          heaviness={armor?.heaviness || 0}
        />
        <Image
          width="150px"
          height="150px"
          src={armor?.image || ""}
          alt={armor?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(armor?.level)}
            alt={armor?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

const ArmorInfo: FC<IArmorInfo> = (props) => {
  const { isShow, defense, heaviness, haveMoreButton = true } = props;
  const v = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };
  const defenseColor = getItemColor(defense);
  const heavinessColor = getHeavinessColor(heaviness);
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
      {haveMoreButton && (
        <>
          {/* <div className="mt-5"> */}
          {/*  <ButtonPrimary>MORE</ButtonPrimary> */}
          {/* </div> */}
          {
            // @ts-ignore
            userData.userId === userId && (
              <div className="mt-5">
                <ButtonPrimary onClick={() => dispatch(activeEditArmorModal())}>
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

export const ArmorItem: FC<IArmorCard> = (props) => {
  const { armor } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <ArmorInfo
          isShow={isHover}
          defense={armor?.defense || 0}
          heaviness={armor?.heaviness || 0}
          haveMoreButton={false}
        />
        <Image
          width="150px"
          height="150px"
          src={armor?.image || ""}
          alt={armor?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(armor?.level)}
            alt={armor?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ArmorCard, (prevProps, nextProps) => {
  return prevProps.armor?.image === nextProps.armor?.image;
});
