import { ReactNode } from "react";
import { heading_style } from "./HeadingField.style";
import { Color, HeadingSize, MT, Weight } from "./HeadingField.config";

const HeadingField = ({
  children,
  heading_size = "normal",
  color = "black",
  mt = "normal",
  weight = "medium",
}: {
  children: ReactNode;
  heading_size?: keyof typeof HeadingSize;
  color?: keyof typeof Color;
  mt?: keyof typeof MT;
  weight?: keyof typeof Weight;
}) => {
  return (
    <h3
      className={`${heading_style} ${HeadingSize[heading_size]} ${MT[mt]} ${Color[color]} ${Weight[weight]}`}
    >
      {children}
    </h3>
  );
};
export default HeadingField;
