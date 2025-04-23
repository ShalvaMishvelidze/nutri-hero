import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { useTranslations } from "next-intl";
import Image from "next/image";

const container =
  "px-[20px] pt-[30px] bg-white-6 rounded-[5px] min-h-[416px] max-xs:p-[10px]";

const Card = ({ card_number = 3 }: { card_number?: number }) => {
  const t = useTranslations(`progress.card_${card_number}`);

  return (
    <div className={container}>
      <Image
        src={"/raindrops.svg"}
        alt={"raindrops"}
        width={69}
        height={69}
        className="size-[69px]"
      />
      <HeadingField heading_size="medium" weight="bold">
        {t("title")}
      </HeadingField>
      <ParagraphField heading_size="small" color="gray_60" weight="normal">
        {t("paragraph")}
      </ParagraphField>
    </div>
  );
};
export default Card;
