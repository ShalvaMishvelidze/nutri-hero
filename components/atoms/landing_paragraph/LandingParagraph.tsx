import { ReactNode } from "react";
import { paragraph } from "./LandingParagraph.style";

const LandingParagraph = ({ children }: { children: ReactNode }) => {
  return <div className={paragraph}>{children}</div>;
};
export default LandingParagraph;
