import { ReactNode } from "react";
import { heading_style } from "./TitleField.style";
import { Title_size } from "./TitleField.config";

const TitleField = ({
  title_size = "big",
  children,
}: {
  title_size?: keyof typeof Title_size;
  children: ReactNode;
}) => {
  return (
    <h1 className={`${heading_style} ${Title_size[title_size]}`}>{children}</h1>
  );
};
export default TitleField;
