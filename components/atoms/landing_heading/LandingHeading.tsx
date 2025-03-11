import { ReactNode } from "react";
import { heading } from "./LandingHeading.style";

const LandingHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className={heading}>{children}</h1>;
};
export default LandingHeading;
