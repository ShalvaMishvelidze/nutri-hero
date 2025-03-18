import { ReactNode } from "react";
import { Btn } from "../btn";
import { btn_style } from "./ModalBtn.style";

const ModalBtn = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Btn onClick={onClick} className={btn_style}>
      {children}
    </Btn>
  );
};
export default ModalBtn;
