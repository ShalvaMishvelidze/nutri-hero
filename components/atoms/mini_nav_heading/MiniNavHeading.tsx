import { ReactNode } from "react";
import { heading, heading_light } from "./MiniNavHeading.style";

const MiniNavHeading = ({
  children,
  is_light,
}: {
  children: ReactNode;
  is_light?: boolean;
}) => {
  return (
    <h1 className={`${is_light ? heading_light : heading}`}>{children}</h1>
  );
};
export default MiniNavHeading;
