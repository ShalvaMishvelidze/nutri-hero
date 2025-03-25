import { ReactNode } from "react";
import { heading_style } from "./TitleField.style";
import { Mb, Title_size } from "./TitleField.config";

const TitleField = ({
  title_size = "big",
  mb = "big",
  children,
}: {
  title_size?: keyof typeof Title_size;
  mb?: keyof typeof Mb;
  children: ReactNode;
}) => {
  return (
    <h1 className={`${heading_style} ${Title_size[title_size]} ${Mb[mb]}`}>
      {children}
    </h1>
  );
};
export default TitleField;
