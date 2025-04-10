import { HeadingField } from "@/components/atoms/heading_field";
import { TitleField } from "@/components/atoms/registration_title";
import { useTranslations } from "next-intl";
import SocialsContainer from "./socials_container/SocialsContainer";
import Image from "next/image";
import { ImgH } from "./SingleBlog.config";
import { ParagraphField } from "@/components/atoms/paragraph_field";

const header_container =
  "py-[23px] border-t-[2px] border-b-[2px] border-blue-5";

const SingleBlog = ({
  index,
  imgH = "normal",
}: {
  index: number;
  imgH?: keyof typeof ImgH;
}) => {
  const t = useTranslations(`single_blog.${index}`);
  return (
    <article className="mt-[40px]">
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
        className={`w-full h-[${ImgH[imgH]}px] object-cover mt-[50px] rounded-[5px]`}
      />
      <ParagraphField heading_size="_18_31" weight="normal" mt="medium">
        {t("paragraph")}
      </ParagraphField>
    </article>
  );
};
export default SingleBlog;
