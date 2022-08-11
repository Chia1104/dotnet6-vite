import { type FC, type ReactNode } from "react";
import { Drawer } from "@geist-ui/core";

interface Props {
  visible: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  placement?: "left" | "right" | "top" | "bottom";
  height?: string | number;
}

const DrawerComponent: FC<Props> = (props) => {
  const {
    visible,
    onClose,
    title,
    subtitle,
    children,
    placement = "bottom",
    height = "300px",
  } = props;
  return (
    <Drawer
      onClose={onClose}
      visible={visible}
      placement={placement}
      height={height}>
      <Drawer.Title>{title}</Drawer.Title>
      <Drawer.Subtitle>{subtitle}</Drawer.Subtitle>
      <Drawer.Content>{children}</Drawer.Content>
    </Drawer>
  );
};

export default DrawerComponent;
