import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_title";
import { splitParagraphIntoBlocks } from "@/utils";
import { useTranslations } from "next-intl";

const container = "w-full max-w-[580px] mx-auto mb-[116px] mt-[40px]";
const header_container =
  "py-[23px] border-t-[2px] border-b-[2px] border-blue-5";

const TermsAndConditions = () => {
  const t = useTranslations("terms");

  const blocks = splitParagraphIntoBlocks(t("paragraph"), 6);

  return (
    <section className={container}>
      <div className={header_container}>
        <TitleField mb="none" title_size="_50_60">
          {t("title")}
        </TitleField>
        <div className="flex justify-end mt-[10px]">
          <HeadingField
            mt="none"
            color="gray_60"
            weight="normal"
            heading_size="_15_22"
          >
            {t("date")}
          </HeadingField>
        </div>
      </div>
      {blocks.map((block, index) => {
        return (
          <ParagraphField
            key={index}
            heading_size="_18_31"
            weight="normal"
            mt="medium"
          >
            {block}
            {/* {t("paragraph")} */}
          </ParagraphField>
        );
      })}
    </section>
  );
};
export default TermsAndConditions;
