import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { useTranslations } from "next-intl";
import { container } from "./Tips.style";

const Tips = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <div className={container}>
      <HeadingField mt="none" color="white" heading_size="_16">
        {t("tips")}
      </HeadingField>
      <ParagraphField heading_size="_14" mt="none" color="white">
        {t("tip")}
      </ParagraphField>
    </div>
  );
};
export default Tips;
