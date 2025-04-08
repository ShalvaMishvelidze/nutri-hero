import { HeadingField } from "@/components/atoms/heading_field";
import { useTranslations } from "next-intl";
import Image from "next/image";

const container = "flex justify-start items-center gap-[17px]";
const image_style = "rounded-full size-[69px] object-cover";

const ProgressHeaderLeft = ({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) => {
  return (
    <div className={container}>
      <Image
        src={"/avatar.png"}
        alt="avatar"
        width={69}
        height={69}
        className={image_style}
      />
      <HeadingField mt="none" heading_size="big" weight="bold" color="white">
        {t("user_name")}
      </HeadingField>
    </div>
  );
};
export default ProgressHeaderLeft;
