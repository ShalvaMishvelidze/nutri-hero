import { ReactNode } from "react";
import { heading_style } from "./HeadingField.style";
import { HeadingSize, MT } from "./HeadingField.config";

const HeadingField = ({
  children,
  heading_size = "normal",
  mt = "normal",
}: {
  children: ReactNode;
  heading_size?: keyof typeof HeadingSize;
  mt?: keyof typeof MT;
}) => {
  return (
    <h3 className={`${heading_style} ${HeadingSize[heading_size]} ${MT[mt]}`}>
      {children}
    </h3>
  );
};
export default HeadingField;
