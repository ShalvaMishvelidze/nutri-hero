"use client";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import { QuestionAnswer } from "./question_answer";

const Accordion = () => {
  const t = useTranslations("contact.accordion");
  return (
    <div>
      <TitleField mb="_20" title_size="medium">
        {t("title")}
      </TitleField>
      <div className="flex flex-col gap-[15px]">
        <QuestionAnswer t={t} number={1} />
        <QuestionAnswer t={t} number={2} />
        <QuestionAnswer t={t} number={3} />
      </div>
    </div>
  );
};
export default Accordion;
