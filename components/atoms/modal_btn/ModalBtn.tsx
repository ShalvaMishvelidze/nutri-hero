import { ReactNode } from "react";
import { Btn } from "../btn";
import { btn_style } from "./ModalBtn.style";

const ModalBtn = ({
  children,
  disabled,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Btn onClick={onClick} disabled={disabled} className={btn_style}>
      {children}
    </Btn>
  );
};
export default ModalBtn;
