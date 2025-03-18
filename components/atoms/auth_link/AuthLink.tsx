import Link from "next/link";
import { container, link_style, text_style } from "./AuthLink.style";

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
      <p className={text_style}>{text}</p>
      <Link className={link_style} href={link}>
        {link_text}
      </Link>
    </div>
  );
};
export default AuthLink;
