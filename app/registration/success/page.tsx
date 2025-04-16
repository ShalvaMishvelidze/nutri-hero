import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const container =
  "max-w-[1280px] w-full mx-auto flex gap-[101px] justify-center items-center max-lg:gap-[40px]";
const text_container =
  "flex flex-col w-1/2 pr-[138px] max-xm:max-w-[500px] max-xm:w-full max-xm:py-[120px] max-lg:pr-[40px] max-xm:px-[30px] max-xm:text-center";

const Success = () => {
  const t = useTranslations("registration_success");

  return (
    <div className={container}>
      <Image
        className="w-1/2 max-xm:hidden"
        src={"/gym-woman-large.png"}
        alt="woman in gym"
        width={632}
        height={720}
      />
      <div className={text_container}>
        <TitleField title_size="big" weight="bold" mb="none">
          {t("title")}
        </TitleField>
        <ParagraphField
          weight="normal"
          heading_size="tiny"
          mt="small"
          color="gray_60"
        >
          {t("paragraph")}
        </ParagraphField>
        <Link href="#">
          <ParagraphField
            mt="_100"
            heading_size="_16_22"
            color="purple"
            weight="normal"
          >
            {t("link")}
          </ParagraphField>
        </Link>
      </div>
    </div>
  );
};
export default Success;
