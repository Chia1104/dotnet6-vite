import { type FC, useRef, memo } from "react";
import { type Headgear } from "@chia/util/types";
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
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { activeEditHeadgearModal } from "@chia/store/modules/ActionSheet";

interface IHeadgearCard {
  headgear?: Headgear;
}
interface IHeadgearInfo {
  isShow: boolean;
  defense: number;
  heaviness: number;
  haveMoreButton?: boolean;
}

const HeadgearCard: FC<IHeadgearCard> = (props) => {
  const { headgear } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <HeadgearInfo
          isShow={isHover}
          defense={headgear?.defense || 0}
          heaviness={headgear?.heaviness || 0}
        />
        <Image
          width="150px"
          height="150px"
          src={headgear?.image || ""}
          alt={headgear?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(headgear?.level)}
            alt={headgear?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

const HeadgearInfo: FC<IHeadgearInfo> = (props) => {
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
          <div className="mt-5">
            <ButtonPrimary>MORE</ButtonPrimary>
          </div>
          {
            // @ts-ignore
            userData.userId === userId && (
              <div className="mt-5">
                <ButtonPrimary
                  onClick={() => dispatch(activeEditHeadgearModal())}>
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

export const HeadgearItem: FC<IHeadgearCard> = (props) => {
  const { headgear } = props;
  const r = useRef<HTMLDivElement>(null);
  const isHover = useHover(r);

  return (
    <div
      ref={r}
      className="w-full h-[270px] c-bg-gradient-yellow-to-pink rounded-2xl p-1">
      <div className="w-full h-full c-bg-secondary rounded-2xl p-1 flex justify-center items-center overflow-hidden relative">
        <HeadgearInfo
          isShow={isHover}
          defense={headgear?.defense || 0}
          heaviness={headgear?.heaviness || 0}
          haveMoreButton={false}
        />
        <Image
          width="150px"
          height="150px"
          src={headgear?.image || ""}
          alt={headgear?.name || ""}
        />
        <div className="absolute bottom-0 right-0 mr-5 mb-5">
          <Image
            width="30px"
            height="30px"
            src={getLevelImage(headgear?.level)}
            alt={headgear?.level?.toString() || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(HeadgearCard, (prevProps, nextProps) => {
  return prevProps.headgear?.image === nextProps.headgear?.image;
});
