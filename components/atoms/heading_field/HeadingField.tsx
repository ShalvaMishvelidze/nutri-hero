import { ReactNode } from "react";
import { heading_style } from "./HeadingField.style";
import {
  Color,
  HeadingSize,
  MT,
  TextAlign,
  TextTransform,
  Weight,
} from "./HeadingField.config";

const HeadingField = ({
  children,
  heading_size = "normal",
  color = "black",
  mt = "normal",
  weight = "medium",
  textTransform = "normal",
  textAlign = "left",
  styleClassName = "",
}: {
  children: ReactNode;
  heading_size?: keyof typeof HeadingSize;
  color?: keyof typeof Color;
  mt?: keyof typeof MT;
  weight?: keyof typeof Weight;
  textTransform?: keyof typeof TextTransform;
  textAlign?: keyof typeof TextAlign;
  styleClassName?: string;
}) => {
  return (
    <h3
      className={`${heading_style} ${HeadingSize[heading_size]} ${MT[mt]} ${Color[color]} ${Weight[weight]} ${TextTransform[textTransform]} ${styleClassName} ${TextAlign[textAlign]}`}
    >
      {children}
    </h3>
  );
};
export default HeadingField;
