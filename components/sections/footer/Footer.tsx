import { FooterLeft } from "@/components/organisms/footer_left";
import { container } from "./Footer.style";
import { FooterNavContainer } from "@/components/organisms/footer_nav_container";

const Footer = () => {
  return (
    <footer className={container}>
      <FooterLeft />
      <FooterNavContainer />
    </footer>
  );
};
export default Footer;
