import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Success = () => {
  const t = useTranslations("registration_success");

  return (
    <div className="max-w-[1280px] w-full mx-auto flex justify-center items-center gap-[101px]">
      <Image
        className="w-1/2"
        src={"/gym-woman-large.png"}
        alt="woman in gym"
        width={632}
        height={720}
      />
      <div className="flex flex-col w-1/2 pr-[60px]">
        <TitleField>{t("title")}</TitleField>
        <ParagraphField
          weight="normal"
          heading_size="tiny"
          mt="small"
          color="gray_60"
        >
          {t("paragraph")}
        </ParagraphField>
        <Link
          href="#"
          className="text-[16px] leading-[22px] text-purple mt-[100px]"
        >
          {t("link")}
        </Link>
      </div>
    </div>
  );
};
export default Success;
