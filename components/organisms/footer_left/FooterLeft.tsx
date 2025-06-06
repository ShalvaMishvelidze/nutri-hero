import { Copyright } from "@/components/molecules/copyright";
import { StoresContainer } from "@/components/molecules/stores_container";
import { container } from "./FooterLeft.style";

const FooterLeft = () => {
  return (
    <div className={container}>
      <StoresContainer storeStyles="w-full" />
      <Copyright />
    </div>
  );
};
export default FooterLeft;
