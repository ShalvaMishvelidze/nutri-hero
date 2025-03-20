import { ReactNode } from "react";
import { heading_style } from "./RegistrationTitle.style";

const CardTextTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className={heading_style}>{children}</h1>;
};
export default CardTextTitle;
