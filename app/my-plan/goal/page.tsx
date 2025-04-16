import { BtnField } from "@/components/atoms/btn_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Goal = () => {
  const t = useTranslations("my_plan.goal");
  return (
    <section className="flex justify-center items-center max-w-[1280px] w-full gap-[101px] mx-auto">
      <Image
        className="w-1/2"
        src="/goal.png"
        width={632}
        height={720}
        alt="goal"
      />
      <div className="w-1/2 pr-[140px]">
        <TitleField>{t("title")}</TitleField>
        <HeadingField mt="big">{t("heading")}</HeadingField>
        <ParagraphField>{t("paragraph")}</ParagraphField>
        <div className="flex justify-end">
          <BtnField btn_size="medium" m_top="huge">
            <Link href={"/my-plan/goal/planning"}>{t("button")}</Link>
          </BtnField>
        </div>
      </div>
    </section>
  );
};
export default Goal;
