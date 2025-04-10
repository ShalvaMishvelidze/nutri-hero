import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_title";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ImgH, LineLimit } from "./MasonryCard.config";
import Link from "next/link";

const container =
  "border-b-[2px] border-black break-inside-avoid pb-[7px] cursor-pointer mb-[40px]";

const MasonryCard = ({
  index,
  imgH = "medium",
  lineLimit = "_4",
}: {
  index: number;
  imgH?: keyof typeof ImgH;
  lineLimit?: keyof typeof LineLimit;
}) => {
  const t = useTranslations(`blog.${index}`);

  return (
    <Link href={`/blog/${index}`}>
      <article className={container}>
        <TitleField title_size="_22" mb="none" textCase="capitalize">
          {t("title")}
        </TitleField>
        <HeadingField
          mt="none"
          heading_size="_13"
          weight="normal"
          textTransform="uppercase"
        >
          {t("author")}
        </HeadingField>
        <Image
          src={`/blog-${index}.png`}
          alt="blog"
          width={324}
          height={ImgH[imgH]}
          className={`w-[324px] h-[${ImgH[imgH]}] rounded-[5px] mt-[10px]`}
        />
        <ParagraphField
          heading_size="_13_22"
          styleClassName={`line-clamp-${LineLimit[lineLimit]}`}
        >
          {t("paragraph")}
        </ParagraphField>
        <HeadingField
          color="gray_44"
          heading_size="_13"
          weight="normal"
          mt="normal"
        >
          {t("date")}
        </HeadingField>
      </article>
    </Link>
  );
};
export default MasonryCard;
