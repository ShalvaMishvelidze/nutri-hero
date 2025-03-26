import { ReactNode } from "react";
import { paragraph_style } from "./ParagraphField.style";
import { Color, MT, ParagraphSize, Weight } from "./ParagraphField.config";

const ParagraphField = ({
  children,
  heading_size = "normal",
  mt = "normal",
  weight = "light",
  color = "black",
}: {
  children: ReactNode;
  heading_size?: keyof typeof ParagraphSize;
  mt?: keyof typeof MT;
  weight?: keyof typeof Weight;
  color?: keyof typeof Color;
}) => {
  return (
    <p
      className={`${paragraph_style}  ${ParagraphSize[heading_size]} ${MT[mt]} ${Weight[weight]} ${Color[color]}`}
    >
      {children}
    </p>
  );
};
export default ParagraphField;
