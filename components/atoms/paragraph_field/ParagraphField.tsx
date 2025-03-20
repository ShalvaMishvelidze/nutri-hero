import { ReactNode } from "react";
import { paragraph_style } from "./ParagraphField.style";
import { MT, ParagraphSize } from "./ParagraphField.config";

const ParagraphField = ({
  children,
  heading_size = "normal",
  mt = "normal",
}: {
  children: ReactNode;
  heading_size?: keyof typeof ParagraphSize;
  mt?: keyof typeof MT;
}) => {
  return (
    <p
      className={`${paragraph_style}  ${ParagraphSize[heading_size]} ${MT[mt]}`}
    >
      {children}
    </p>
  );
};
export default ParagraphField;
