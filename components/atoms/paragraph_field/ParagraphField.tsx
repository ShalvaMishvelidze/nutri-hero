import { ReactNode } from "react";
import { paragraph_style } from "./ParagraphField.style";
import {
  Color,
  MT,
  ParagraphSize,
  TextTransform,
  Weight,
} from "./ParagraphField.config";

const ParagraphField = ({
  children,
  heading_size = "normal",
  mt = "normal",
  weight = "light",
  color = "black",
  textTransform = "normal",
}: {
  children: ReactNode;
  heading_size?: keyof typeof ParagraphSize;
  mt?: keyof typeof MT;
  weight?: keyof typeof Weight;
  color?: keyof typeof Color;
  textTransform?: keyof typeof TextTransform;
}) => {
  return (
    <p
      className={`${paragraph_style}  ${ParagraphSize[heading_size]} ${MT[mt]} ${Weight[weight]} ${Color[color]} ${TextTransform[textTransform]}`}
    >
      {children}
    </p>
  );
};
export default ParagraphField;
