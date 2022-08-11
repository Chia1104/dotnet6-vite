import { type FC } from "react";
import { Avatar as GeistAvatar, Tooltip } from "@geist-ui/core";

interface Props {
  text?: string;
  src: string;
  width: string | number | undefined;
  height: string | number | undefined;
  onClick?: () => void;
}

const Avatar: FC<Props> = (props) => {
  const { width, height, text, src, onClick } = props;
  return (
    <>
      {text ? (
        <Tooltip text={text} placement="bottom">
          <button onClick={onClick}>
            <GeistAvatar width={width} height={height} src={src} />
          </button>
        </Tooltip>
      ) : (
        <button onClick={onClick}>
          <GeistAvatar width={width} height={height} src={src} />
        </button>
      )}
    </>
  );
};

export default Avatar;
