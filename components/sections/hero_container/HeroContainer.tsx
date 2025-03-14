import { container } from "./HeroContainer.style";
import { ReactNode } from "react";

const HeroContainer = ({ children }: { children: ReactNode }) => {
  return <div className={container}>{children}</div>;
};
export default HeroContainer;
