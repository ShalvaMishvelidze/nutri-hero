import Image from "next/image";
import { image_style } from "./HeroImage.style";

const HeroImage = ({ img_url = "/food.png" }: { img_url?: string }) => {
  return (
    <Image
      src={img_url}
      alt="hero background"
      width={1280}
      height={720}
      className={image_style}
    />
  );
};
export default HeroImage;
