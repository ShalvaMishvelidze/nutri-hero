import { ReactNode } from "react";
import { heading_style } from "./HeadingField.style";
import {
  Color,
  HeadingSize,
  MB,
  MT,
  TextAlign,
  TextTransform,
  TextWrap,
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
  textWrap = "none",
  mb = "none",
  maxLength,
  styleClassName = "",
}: {
  children: ReactNode;
  heading_size?: keyof typeof HeadingSize;
  color?: keyof typeof Color;
  mt?: keyof typeof MT;
  weight?: keyof typeof Weight;
  textTransform?: keyof typeof TextTransform;
  textAlign?: keyof typeof TextAlign;
  textWrap?: keyof typeof TextWrap;
  mb?: keyof typeof MB;
  maxLength?: number;
  styleClassName?: string;
}) => {
  const text =
    typeof children === "string" && maxLength
      ? children.length > maxLength
        ? children.slice(0, maxLength) + "..."
        : children
      : children;

  return (
    <h3
      className={`${heading_style} ${HeadingSize[heading_size]} ${MT[mt]} ${Color[color]} ${Weight[weight]} ${TextTransform[textTransform]} ${styleClassName} ${TextAlign[textAlign]} ${TextWrap[textWrap]} ${MB[mb]}`}
    >
      {text}
    </h3>
  );
};
export default HeadingField;
