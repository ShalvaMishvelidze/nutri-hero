"use client";
import { CustomRadio } from "@/components/atoms/custom_radio";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { Form, Radio } from "antd";
import { useState } from "react";

const RadioInputs = ({
  heading,
  paragraphs,
  name,
  form,
}: {
  heading: string;
  paragraphs: string[];
  name: string;
  form: ReturnType<typeof Form.useForm>[0];
}) => {
  const [oldVal, setOldVal] = useState(form.getFieldValue(name));

  return (
    <div className="!flex !flex-col !gap-[28px]">
      <HeadingField mt="none">{heading}</HeadingField>
      <Form.Item
        name={`${name}`}
        rules={[{ required: true, message: "Please select an option!" }]}
      >
        <Radio.Group className="w-full">
          <div className="flex flex-col !gap-[28px]">
            {paragraphs.map((paragraph) => (
              <div
                key={paragraph}
                className="flex justify-between items-center"
              >
                <ParagraphField mt="none">{paragraph}</ParagraphField>
                <CustomRadio
                  oldVal={oldVal}
                  setOldVal={setOldVal}
                  name={name}
                  form={form}
                  value={paragraph}
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
