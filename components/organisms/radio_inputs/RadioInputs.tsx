"use client";
import { CustomRadio } from "@/components/atoms/custom_radio";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { Form, Radio } from "antd";
import { ReactNode, useState } from "react";
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
  paragraphs,
  name,
  form,
  not_required,
  radioMaxLength,
  childrenAreString = false,
  headingGap = "normal",
  radioGroupHeight = "auto",
  radioInputGap = "normal",
  w = "auto",
  radioDirection = "normal",
  radioW = "full",
  radioJustify = "between",
  radioGap = "none",
}: {
  heading?: string;
  paragraphs: ReactNode[];
  name: string;
  form: ReturnType<typeof Form.useForm>[0];
  not_required?: boolean;
  radioMaxLength?: number;
  childrenAreString?: boolean;
  headingGap?: keyof typeof HeadingGap;
  radioGroupHeight?: keyof typeof RadioGroupHeight;
  radioInputGap?: keyof typeof RadioInputGap;
  w?: keyof typeof W;
  radioDirection?: keyof typeof RadioDirection;
  radioW?: keyof typeof RadioW;
  radioJustify?: keyof typeof RadioJustify;
  radioGap?: keyof typeof RadioGap;
}) => {
  const [oldVal, setOldVal] = useState(form.getFieldValue(name));

  return (
    <div className={`!flex !flex-col ${HeadingGap[headingGap]} ${W[w]}`}>
      {heading && (
        <HeadingField mt="none" styleClassName="w-max">
          {heading}
        </HeadingField>
      )}
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
                key={paragraph?.toString()}
                className={`flex ${RadioDirection[radioDirection]} ${RadioJustify[radioJustify]} items-center ${RadioGap[radioGap]}`}
              >
                {childrenAreString ? (
                  <ParagraphField mt="none">
                    {radioMaxLength
                      ? `${(paragraph as string).slice(0, radioMaxLength)}...`
                      : paragraph}
                  </ParagraphField>
                ) : (
                  paragraph
                )}
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
