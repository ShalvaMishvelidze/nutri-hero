"use client";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const question_container =
  "w-full h-[50px] rounded-[5px] bg-blue-5 flex justify-between items-center px-[20px] cursor-pointer";

const QuestionAnswer = ({
  t,
  number,
}: {
  t: ReturnType<typeof useTranslations>;
  number: number;
}) => {
  const [active, setActive] = useState(false);

  const answer_container = `w-full overflow-hidden transition-h duration-[300ms] ${
    active ? "h-[136px] max-xs:h-[168px] max-xxs:h-[300px]" : "h-0"
  }`;

  return (
    <div>
      <div className={question_container} onClick={() => setActive(!active)}>
        <HeadingField mt="none" heading_size="_18_20" weight="medium">
          {t(`${number}.question`)}
        </HeadingField>
        <Image
          src={active ? "/minus.svg" : "/plus.svg"}
          alt="plus"
          width={16}
          height={16}
        />
      </div>
      <div className={answer_container}>
        <ParagraphField
          heading_size="_16_31"
          weight="medium"
          mt="_15"
          styleClassName="mb-[15px] mx-[20px]"
        >
          {t(`${number}.answer`)}
        </ParagraphField>
      </div>
    </div>
  );
};
export default QuestionAnswer;
