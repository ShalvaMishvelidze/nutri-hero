import Image from "next/image";
import Link from "next/link";
import { link_container, link_img, link_text } from "./ModalLink.style";
import { ReactNode } from "react";

const ModalLink = ({
  href,
  img_url,
  children,
}: {
  href: string;
  img_url: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href} className={link_container}>
      <Image
        className={link_img}
        src={img_url}
        alt={children as string}
        width={22}
        height={22}
      />
      <p className={link_text}>{children}</p>
    </Link>
  );
};
export default ModalLink;
