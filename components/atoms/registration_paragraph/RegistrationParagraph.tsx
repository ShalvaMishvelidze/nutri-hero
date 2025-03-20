import { ReactNode } from "react";
import { paragraph } from "./RegistrationParagraph.style";

const RegistrationParagraph = ({ children }: { children: ReactNode }) => {
  return <p className={paragraph}>{children}</p>;
};
export default RegistrationParagraph;
