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
import { setGoal } from "@/actions";

const radio_container = `!flex flex-col gap-[28px] border-none outline-none`;

type Section_Type = 0 | 1 | 2 | 3;

const Planning = () => {
  const t = useTranslations("my_plan.goals");
  const carouselRef = useRef<CarouselRef>(null);
  const [section, setSection] = useState<Section_Type>(0);
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);

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
    if (changedValues[7] === "2") {
      form.resetFields(["8"]);
      setShow(false);
    } else if (changedValues[7] === "1") {
      setShow(true);
    }
    console.log("onValuesChange:", changedValues, allValues);
  };

  const onFinish = (values: Record<string, unknown>) => {
    setGoal(values as { [key: string]: string });
  };

  return (
    <section className="max-w-[1280px] w-full mx-auto flex justify-center items-center gap-[101px]">
      <Image
        className="w-1/2 object-cover"
        src={`/goal-${section + 1}.png`}
        alt="salad"
        width={632}
        height={720}
      />
      <div className="!w-1/2 pr-[140px]">
        <GoalNav
          carouselRef={carouselRef}
          section={section}
          setSection={setSection}
        />
        <Form
          form={form}
          name="goal"
          onValuesChange={onValuesChange}
          onFinish={onFinish}
        >
          <Carousel ref={carouselRef} slidesPerRow={1} dots={false}>
            <div className={radio_container}>
              <RadioInputs
                form={form}
                name="1"
                heading={t("1.question")}
                paragraphs={[t("1.answer_1"), t("1.answer_2")]}
              />
              <RadioInputs
                form={form}
                name="2"
                heading={t("2.question")}
                paragraphs={[t("2.answer_1"), t("2.answer_2"), t("2.answer_3")]}
              />
            </div>
            <div className={radio_container}>
              <RadioInputs
                form={form}
                name="3"
                heading={t("3.question")}
                paragraphs={[t("3.answer_1"), t("3.answer_2")]}
              />
              <RadioInputs
                form={form}
                name="4"
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
                name="5"
                heading={t("5.question")}
                paragraphs={[t("5.answer_1"), t("5.answer_2"), t("5.answer_3")]}
              />
              <RadioInputs
                form={form}
                name="6"
                heading={t("6.question")}
                paragraphs={[t("6.answer_1"), t("6.answer_2")]}
              />
            </div>
            <div className={radio_container}>
              <RadioInputs
                form={form}
                name="7"
                heading={t("7.question")}
                paragraphs={[t("7.answer_1"), t("7.answer_2")]}
              />
              {show && (
                <RadioInputs
                  form={form}
                  name="8"
                  heading={t("8.question")}
                  paragraphs={[t("8.answer_1"), t("8.answer_2")]}
                  not_required
                />
              )}
              <HeadingField>Goal name</HeadingField>
              <Form.Item
                name={"goal_name"}
                rules={[
                  {
                    required: true,
                    message: "You can't have a goal without name!",
                  },
                  {
                    max: 256,
                    message: "Name can't be longer than 256 characters",
                  },
                ]}
              >
                <InputField placeholder="Enter a name" />
              </Form.Item>
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
