import { HeroImage } from "@/components/atoms/hero_image";
import { container } from "./HeroContainer.style";
import { ReactNode } from "react";

const HeroContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={container}>
      <HeroImage />
      {children}
    </div>
  );
};
export default HeroContainer;
