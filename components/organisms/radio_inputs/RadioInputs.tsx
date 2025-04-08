"use client";
import { CustomRadio } from "@/components/atoms/custom_radio";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { Form, Radio } from "antd";
import { useState } from "react";
import {
  HeadingGap,
  RadioDirection,
  RadioGap,
  RadioGroupHeight,
  RadioInputGap,
  RadioJustify,
  RadioW,
  W,
} from "./RadioInputs.config";

const RadioInputs = ({
  heading,
  headingGap = "normal",
  radioGroupHeight = "auto",
  paragraphs,
  radioInputGap = "normal",
  w = "auto",
  name,
  radioDirection = "normal",
  radioW = "full",
  form,
  radioJustify = "between",
  not_required,
  radioGap = "none",
  radioMaxLength,
}: {
  heading: string;
  headingGap?: keyof typeof HeadingGap;
  radioGroupHeight?: keyof typeof RadioGroupHeight;
  paragraphs: string[];
  radioInputGap?: keyof typeof RadioInputGap;
  w?: keyof typeof W;
  name: string;
  radioDirection?: keyof typeof RadioDirection;
  radioW?: keyof typeof RadioW;
  form: ReturnType<typeof Form.useForm>[0];
  radioJustify?: keyof typeof RadioJustify;
  not_required?: boolean;
  radioGap?: keyof typeof RadioGap;
  radioMaxLength?: number;
}) => {
  const [oldVal, setOldVal] = useState(form.getFieldValue(name));

  return (
    <div className={`!flex !flex-col ${HeadingGap[headingGap]} ${W[w]}`}>
      <HeadingField mt="none" styleClassName="w-max">
        {heading}
      </HeadingField>
      <Form.Item
        name={`${name}`}
        rules={[
          not_required
            ? {}
            : { required: true, message: "Please select an option!" },
        ]}
      >
        <Radio.Group className={`${RadioW[radioW]}`}>
          <div
            className={`flex flex-col flex-wrap ${RadioInputGap[radioInputGap]} ${RadioGroupHeight[radioGroupHeight]}`}
          >
            {paragraphs.map((paragraph, index) => (
              <div
                key={paragraph}
                className={`flex ${RadioDirection[radioDirection]} ${RadioJustify[radioJustify]} items-center ${RadioGap[radioGap]}`}
              >
                <ParagraphField mt="none">
                  {radioMaxLength
                    ? `${paragraph.slice(0, radioMaxLength)}...`
                    : paragraph}
                </ParagraphField>
                <CustomRadio
                  oldVal={oldVal}
                  setOldVal={setOldVal}
                  name={name}
                  form={form}
                  value={`${index + 1}`}
                />
              </div>
            ))}
          </div>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};
export default RadioInputs;
