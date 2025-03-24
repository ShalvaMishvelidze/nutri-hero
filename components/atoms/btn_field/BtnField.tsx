import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";
import { Bg, Btn_Size, M_left, M_top, P_bottom } from "./BtnField.config";
import { btn_style } from "./BtnField.style";

const BtnField = ({
  styleClassName,
  btn_size = "full",
  m_top = "regular",
  bg = "filled",
  m_left = "none",
  p_bottom = "none",
  children,
  ...rest
}: {
  styleClassName?: string;
  btn_size?: keyof typeof Btn_Size;
  m_top?: keyof typeof M_top;
  bg?: keyof typeof Bg;
  m_left?: keyof typeof M_left;
  p_bottom?: keyof typeof P_bottom;
  children: ReactNode;
} & ButtonProps) => {
  return (
    <Button
      className={`${styleClassName} ${btn_style} ${Btn_Size[btn_size]} ${M_top[m_top]} ${Bg[bg]} ${M_left[m_left]} ${P_bottom[p_bottom]}`}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default BtnField;
