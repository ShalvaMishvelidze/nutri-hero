import { BtnField } from "@/components/atoms/btn_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const container =
  "flex justify-center items-center max-w-[1280px] w-full gap-[101px] mx-auto max-lg:gap-[40px]";
const text_container =
  "w-1/2 pr-[140px] max-lg:pr-[40px] max-xm:px-[30px] max-xm:py-[120px] max-xm:text-center max-xm:max-w-[500px] max-xm:w-full";

const Goal = () => {
  const t = useTranslations("my_plan.goal");
  return (
    <section className={container}>
      <Image
        className="w-1/2 max-xm:hidden "
        src="/goal.png"
        width={632}
        height={720}
        alt="goal"
      />
      <div className={text_container}>
        <TitleField
          styleClassName="max-w-[350px] w-full max-xm:max-w-full"
          mb="big"
        >
          {t("title")}
        </TitleField>
        <HeadingField
          styleClassName="max-xm:text-center"
          weight="bold"
          mt="none"
        >
          {t("heading")}
        </HeadingField>
        <ParagraphField color="dark_gray">{t("paragraph")}</ParagraphField>
        <div className="flex justify-end">
          <BtnField
            styleClassName="max-lg:!mt-[50px] max-xm:!w-full"
            btn_size="medium"
            m_top="huge"
          >
            <Link href={"/my-plan/goal/planning"}>{t("button")}</Link>
          </BtnField>
        </div>
      </div>
    </section>
  );
};
export default Goal;
