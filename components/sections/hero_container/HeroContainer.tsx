import { HeroImage } from "@/components/atoms/hero_image";
import { container } from "./HeroContainer.style";
import { ReactNode } from "react";
import { ChildrenWidth, H, Items, Pb } from "./HeroContainer.config";

const HeroContainer = ({
  children,
  img_url,
  items = "center",
  pb = "none",
  overlay = false,
  childrenWidth = "full",
  h = "regular",
}: {
  children: ReactNode;
  img_url?: string;
  items?: keyof typeof Items;
  pb?: keyof typeof Pb;
  overlay?: boolean;
  childrenWidth?: keyof typeof ChildrenWidth;
  h?: keyof typeof H;
}) => {
  return (
    <div className={`${container} ${Items[items]} ${Pb[pb]} ${H[h]}`}>
      <HeroImage img_url={img_url} />
      <div
        className={`relative z-50 max-w-[1280px] ${ChildrenWidth[childrenWidth]}`}
      >
        {children}
      </div>
      {overlay && (
        <div className="bg-gray-15 absolute left-0 top-0 w-full h-full z-10"></div>
      )}
    </div>
  );
};
export default HeroContainer;
