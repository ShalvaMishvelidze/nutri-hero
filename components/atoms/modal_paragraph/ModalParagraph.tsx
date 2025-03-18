import { ReactNode } from "react";
import { paragraph } from "./ModalParagraph.style";

const ModalParagraph = ({ children }: { children: ReactNode }) => {
  return <p className={paragraph}>{children}</p>;
};
export default ModalParagraph;
