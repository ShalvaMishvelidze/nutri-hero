import { ReactNode } from "react";
import { Btn } from "../btn";
import { btn_style } from "./InputPostfix.style";
const InputPostfix = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <Btn onClick={onClick} type="text" className={btn_style}>
      {children}
    </Btn>
  );
};
export default InputPostfix;
