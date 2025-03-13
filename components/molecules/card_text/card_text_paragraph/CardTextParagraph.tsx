import { ReactNode } from "react";
import { paragraph, paragraph_light } from "./CardTextParagraph.style";

const CardTextParagraph = ({
  children,
  is_light,
}: {
  children: ReactNode;
  is_light?: boolean;
}) => {
  return (
    <p className={`${is_light ? paragraph_light : paragraph}`}>{children}</p>
  );
};
export default CardTextParagraph;
