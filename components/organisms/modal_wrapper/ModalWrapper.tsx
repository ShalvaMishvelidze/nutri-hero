import { ReactNode } from "react";
import { container } from "./ModalWrapper.style";

const ModalWrapper = ({
  styleClassNames,
  children,
}: {
  styleClassNames?: string;
  children: ReactNode;
}) => {
  return <div className={`${container} ${styleClassNames}`}>{children}</div>;
};
export default ModalWrapper;
