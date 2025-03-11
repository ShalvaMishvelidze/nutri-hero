import Image from "next/image";
import { image_style } from "./HeroImage.style";

const HeroImage = () => {
  return (
    <Image
      src={"/food.png"}
      alt="hero background"
      width={1280}
      height={720}
      className={image_style}
    />
  );
};
export default HeroImage;
