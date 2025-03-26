import { ReactNode } from "react";
import { heading_style } from "./TitleField.style";
import { Color, Mb, Title_size, Weight } from "./TitleField.config";

const TitleField = ({
  title_size = "big",
  mb = "big",
  color = "black",
  weight = "extra",
  children,
}: {
  title_size?: keyof typeof Title_size;
  mb?: keyof typeof Mb;
  color?: keyof typeof Color;
  weight?: keyof typeof Weight;
  children: ReactNode;
}) => {
  return (
    <h1
      className={`${heading_style} ${Title_size[title_size]} ${Mb[mb]} ${Color[color]} ${Weight[weight]}`}
    >
      {children}
    </h1>
  );
};
export default TitleField;
