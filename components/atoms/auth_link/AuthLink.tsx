import Link from "next/link";
import { container, link_style } from "./AuthLink.style";
import { ParagraphField } from "../paragraph_field";

const AuthLink = ({
  text,
  link,
  link_text,
}: {
  text: string;
  link: string;
  link_text: string;
}) => {
  return (
    <div className={container}>
      <ParagraphField
        heading_size="_14"
        mt="none"
        weight="normal"
        color="light_purple"
        styleClassName="text-center"
      >
        {text}{" "}
        <Link className={link_style} href={link}>
          {link_text}
        </Link>
      </ParagraphField>
    </div>
  );
};
export default AuthLink;
