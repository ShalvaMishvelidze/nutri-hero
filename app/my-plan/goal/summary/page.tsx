"use client";
import { getGoal } from "@/actions";
import { BtnField } from "@/components/atoms/btn_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

const section = `max-w-[1280px] mx-auto `;
const section_container = `max-w-[664px] max-m:px-[30px] mx-auto`;
const container = `flex flex-col gap-[15px]`;
const item = `flex justify-between items-center border border-blue-5 rounded-[5px] h-[50px] px-[20px]`;
const img_container = `flex gap-[10px]`;

const Summary = () => {
  const t = useTranslations("my_plan.goal_summary");
  const [goals, setGoals] = useState<[string, unknown][]>([]);

  useLayoutEffect(() => {
    getGoal().then((g) => {
      setGoals(
        Object.entries(g).sort(([keyA], [keyB]) =>
          keyA === "goal_name" ? -1 : keyB === "goal_name" ? 1 : 0
        )
      );
    });
  }, []);

  return (
    <section className={section}>
      <Image
        src={"/summary-bg.png"}
        alt="woman running"
        width={1280}
        height={400}
        className="object-cover w-full h-[400px] mb-[40px]"
      />
      <div className={section_container}>
        <TitleField title_size="bigger" mb="big">
          {t("title")}
        </TitleField>
        <div className={container}>
          <div className={item}>
            <ParagraphField mt="none" heading_size="small" weight="normal">
              {t(`${goals[0]?.[0] as string}`)}
            </ParagraphField>
            <div className={img_container}>
              <ParagraphField mt="none" heading_size="small" weight="bold">
                {goals[0]?.[1] as string}
              </ParagraphField>
              <Image src={"/edit-blue.svg"} alt="edit" width={18} height={18} />
            </div>
          </div>
          {goals.slice(1).map(([key, value]) => {
            return (
              <div key={`${key}_${value}`} className={item}>
                <ParagraphField mt="none" heading_size="small" weight="normal">
                  {t(`${key}.title`)}
                </ParagraphField>
                <div className={img_container}>
                  <ParagraphField mt="none" heading_size="small" weight="bold">
                    {t(`${key}.${value as string}`)}
                  </ParagraphField>
                  <Image
                    src={"/gray-check.svg"}
                    alt="checked checkbox"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end mb-[55px]">
          <Link href={"/my-plan"}>
            <BtnField btn_size="medium">{t("button")}</BtnField>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Summary;
