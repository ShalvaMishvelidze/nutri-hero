import Link from "next/link";
import { container, heading_style, link_style } from "./Nav.style";
import { useTranslations } from "next-intl";

const Nav = ({
  heading,
  links,
  is_logged_in,
  has_external_links,
}: {
  heading: string;
  links: { text: string; url: string }[];
  is_logged_in?: boolean;
  has_external_links?: boolean;
}) => {
  const t = useTranslations("footer");

  return (
    <div className={container}>
      <h4 className={heading_style}>{t(heading)}</h4>
      {links.map(({ text, url }) => {
        return has_external_links ? (
          <a className={link_style} href={`${url}`} key={url} target="_blank">
            {t(text)}
          </a>
        ) : (
          <Link
            className={link_style}
            href={`/${is_logged_in ? "#" : ""}${url}`}
            key={url}
          >
            {t(text)}
          </Link>
        );
      })}
    </div>
  );
};
export default Nav;
