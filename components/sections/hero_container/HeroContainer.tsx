import { HeroImage } from "@/components/atoms/hero_image";
import { container } from "./HeroContainer.style";
import { ReactNode } from "react";
import { Items, Pb } from "./HeroContainer.config";

const HeroContainer = ({
  children,
  img_url,
  items = "center",
  pb = "none",
}: {
  children: ReactNode;
  img_url?: string;
  items?: keyof typeof Items;
  pb?: keyof typeof Pb;
}) => {
  return (
    <div className={`${container} ${Items[items]} ${Pb[pb]}`}>
      <HeroImage img_url={img_url} />
      <div className="relative z-100 w-full">{children}</div>
    </div>
  );
};
export default HeroContainer;
