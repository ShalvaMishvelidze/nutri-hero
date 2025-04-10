import CopyLinkIcon from "@/components/icons/CopyLinkIcon";
import { SocialContainer } from "./social_container";
import { HeadingField } from "@/components/atoms/heading_field";
import { useTranslations } from "next-intl";

const SocialsContainer = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <div className="flex justify-start items-center gap-[15px] mt-[15px]">
      <SocialContainer img_url="/facebook-gray.svg" text={t("share")} />
      <SocialContainer img_url="/twitter-gray.svg" text={t("tweet")} />
      <div className="flex justify-start items-center gap-[6px]">
        <CopyLinkIcon styleClassName="size-[15px] fill-gray-60" />
        <HeadingField
          color="gray_60"
          heading_size="small"
          mt="none"
          weight="normal"
        >
          {t("copy_link")}
        </HeadingField>
      </div>
    </div>
  );
};
export default SocialsContainer;
