import NavLink from "./nav_link";
import { container } from "./Nav.style";
import { landing_links, logged_in_links } from "./constants";
import { useTranslations } from "next-intl";

const Nav = ({ is_logged_in }: { is_logged_in?: boolean }) => {
  const t = useTranslations("header");
  return (
    <nav className={container}>
      {is_logged_in
        ? logged_in_links.map((link) => {
            return (
              <NavLink key={link} href={link}>
                {t(link)}
              </NavLink>
            );
          })
        : landing_links.map((link) => {
            return (
              <NavLink key={link} href={`/#${link}`}>
                {t(link)}
              </NavLink>
            );
          })}
    </nav>
  );
};
export default Nav;
