import { HeadingField } from "@/components/atoms/heading_field";
import Image from "next/image";

const SocialContainer = ({
  img_url,
  text,
}: {
  img_url: string;
  text: string;
}) => {
  return (
    <div className="flex justify-start items-center gap-[6px]">
      <Image
        src={img_url}
        alt="social"
        width={12}
        height={12}
        className="size-[12px]"
      />
      <HeadingField
        color="gray_60"
        heading_size="small"
        mt="none"
        weight="normal"
      >
        {text}
      </HeadingField>
    </div>
  );
};
export default SocialContainer;
