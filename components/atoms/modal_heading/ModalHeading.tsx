import { ReactNode } from "react";
import { heading } from "./ModalHeading.style";

const ModalHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className={heading}>{children}</h1>;
};
export default ModalHeading;
