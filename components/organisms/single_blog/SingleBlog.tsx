import { HeadingField } from "@/components/atoms/heading_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import SocialsContainer from "./socials_container/SocialsContainer";
import Image from "next/image";
import { ImgH } from "./SingleBlog.config";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { splitParagraphIntoBlocks } from "@/utils";

const header_container =
  "py-[23px] max-xs:py-[10px] border-t-[2px] border-b-[2px] border-blue-5";

const SingleBlog = ({
  index,
  imgH = "normal",
  splitParagraphIntoBlocksNumber = 1,
}: {
  index: number;
  imgH?: keyof typeof ImgH;
  splitParagraphIntoBlocksNumber?: number;
}) => {
  const t = useTranslations(`single_blog.${index}`);

  const blocks = splitParagraphIntoBlocks(
    t("paragraph"),
    splitParagraphIntoBlocksNumber
  );
  return (
    <article className="mt-[40px] max-xs:mt-[20px]">
      <div className={header_container}>
        <TitleField mb="none" title_size="_50_60">
          {t("title")}
        </TitleField>
        <div className="flex justify-between mt-[10px]">
          <HeadingField
            heading_size="_15_28"
            weight="bold"
            mt="none"
            textTransform="capitalize"
          >
            {t("author")}
          </HeadingField>
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
      <SocialsContainer t={t} />
      <Image
        src={`/single-blog-${index}.png`}
        alt="blog"
        width={580}
        height={ImgH[imgH]}
        className={`w-full h-[${ImgH[imgH]}px] object-cover mt-[50px] rounded-[5px] max-xs:mt-[20px]`}
      />
      {blocks.map((block, idx) => {
        return (
          <ParagraphField
            key={`blog_paragraph_${index}_${idx}`}
            heading_size="_18_31"
            weight="normal"
            mt="medium"
            styleClassName="max-xs:mt-[10px]"
          >
            {block}
          </ParagraphField>
        );
      })}
    </article>
  );
};
export default SingleBlog;
