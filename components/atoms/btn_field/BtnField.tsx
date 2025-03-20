import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";
import { Bg, Btn_Size, M_top } from "./BtnField.config";
import { btn_style } from "./BtnField.style";

const BtnField = ({
  styleClassName,
  btn_size = "full",
  m_top = "regular",
  bg = "filled",
  children,
  ...rest
}: {
  styleClassName?: string;
  btn_size?: keyof typeof Btn_Size;
  m_top?: keyof typeof M_top;
  bg?: keyof typeof Bg;
  children: ReactNode;
} & ButtonProps) => {
  return (
    <Button
      className={`${styleClassName} ${btn_style} ${Btn_Size[btn_size]} ${M_top[m_top]} ${Bg[bg]}`}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default BtnField;
