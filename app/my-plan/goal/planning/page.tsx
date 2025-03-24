"use client";
import { GoalNav } from "@/components/atoms/goal_nav";
import { Carousel, Form } from "antd";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { RadioInputs } from "@/components/organisms/radio_inputs";
import { CarouselRef } from "antd/es/carousel";
import { BtnField } from "@/components/atoms/btn_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { InputField } from "@/components/atoms/input_field";

const radio_container = `!flex flex-col gap-[28px]`;

type Section_Type = 0 | 1 | 2 | 3;

const Planning = () => {
  const t = useTranslations("my_plan.goals");
  const carouselRef = useRef<CarouselRef>(null);
  const [section, setSection] = useState<Section_Type>(0);
  const [form] = Form.useForm();

  const handleClick = (type: "prev" | "next") => {
    if (type === "prev") {
      if (section === 0) return;
      carouselRef.current?.prev();
      setSection((prev) => (prev - 1) as Section_Type);
    } else {
      if (section === 3) return;
      carouselRef.current?.next();
      setSection((prev) => (prev + 1) as Section_Type);
    }
  };

  const onValuesChange = (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>
  ) => {
    console.log("onValuesChange:", changedValues, allValues);
  };

  return (
    <section className="max-w-[1280px] w-full mx-auto flex justify-center items-center gap-[101px]">
      <Image
        className="w-1/2 object-cover"
        src={"/salad-big.png"}
        alt="salad"
        width={632}
        height={720}
      />
      <div className="!w-1/2 pr-[140px]">
        <GoalNav
          carouselRef={carouselRef.current as CarouselRef}
          section={section}
          setSection={setSection}
        />
        <Form form={form} name="goal" onValuesChange={onValuesChange}>
          <Carousel ref={carouselRef} slidesPerRow={1} dots={false}>
            <div className={radio_container}>
              <RadioInputs
                form={form}
                name="question_1"
                heading={t("1.question")}
                paragraphs={[t("1.answer_1"), t("1.answer_2")]}
              />
              <RadioInputs
                form={form}
                name="question_2"
                heading={t("2.question")}
                paragraphs={[t("2.answer_1"), t("2.answer_2"), t("2.answer_3")]}
              />
            </div>
            <div className={radio_container}>
              <RadioInputs
                form={form}
                name="question_3"
                heading={t("3.question")}
                paragraphs={[t("3.answer_1"), t("3.answer_2")]}
              />
              <RadioInputs
                form={form}
                name="question_4"
                heading={t("4.question")}
                paragraphs={[
                  t("4.answer_1"),
                  t("4.answer_2"),
                  t("4.answer_3"),
                  t("4.answer_4"),
                ]}
              />
            </div>
            <div className={radio_container}>
              <RadioInputs
                form={form}
                name="question_5"
                heading={t("5.question")}
                paragraphs={[t("5.answer_1"), t("5.answer_2"), t("5.answer_3")]}
              />
              <RadioInputs
                form={form}
                name="question_6"
                heading={t("6.question")}
                paragraphs={[t("6.answer_1"), t("6.answer_2")]}
              />
            </div>
            <div className={radio_container}>
              <RadioInputs
                form={form}
                name="question_7"
                heading={t("7.question")}
                paragraphs={[t("7.answer_1"), t("7.answer_2")]}
              />
              <RadioInputs
                form={form}
                name="question_8"
                heading={t("8.question")}
                paragraphs={[t("8.answer_1"), t("8.answer_2")]}
              />
              <HeadingField>Goal name</HeadingField>
              <InputField placeholder="Enter a name" />
            </div>
          </Carousel>

          <div className="flex justify-end items-center gap-[16px] mt-[75px]">
            {section !== 0 && (
              <BtnField
                m_top="none"
                bg="light"
                btn_size="medium"
                onClick={() => handleClick("prev")}
              >
                {t("btns.back")}
              </BtnField>
            )}
            {section !== 3 && (
              <BtnField
                m_top="none"
                btn_size="medium"
                onClick={() => handleClick("next")}
              >
                {t("btns.next")}
              </BtnField>
            )}
            {section === 3 && (
              <Form.Item className="!w-auto">
                <BtnField m_top="none" btn_size="medium" htmlType="submit">
                  {t("btns.done")}
                </BtnField>
              </Form.Item>
            )}
          </div>
        </Form>
      </div>
    </section>
  );
};
export default Planning;
