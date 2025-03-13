import { ReactNode } from "react";
import { heading, heading_light } from "./CardTextHeading.style";

const CardTextHeading = ({
  children,
  is_light,
}: {
  children: ReactNode;
  is_light?: boolean;
}) => {
  return (
    <h3 className={`${is_light ? heading_light : heading}`}>{children}</h3>
  );
};
export default CardTextHeading;
