import Link from "next/link";
import { ReactNode } from "react";
import { link_style } from "./NavLink.style";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link href={href} className={link_style}>
      {children}
    </Link>
  );
};

export default NavLink;
