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
  not_required,
}: {
  heading: string;
  paragraphs: string[];
  name: string;
  form: ReturnType<typeof Form.useForm>[0];
  not_required?: boolean;
}) => {
  const [oldVal, setOldVal] = useState(form.getFieldValue(name));

  return (
    <div className="!flex !flex-col !gap-[28px]">
      <HeadingField mt="none">{heading}</HeadingField>
      <Form.Item
        name={`${name}`}
        rules={[
          not_required
            ? {}
            : { required: true, message: "Please select an option!" },
        ]}
      >
        <Radio.Group className="w-full">
          <div className="flex flex-col !gap-[28px]">
            {paragraphs.map((paragraph, index) => (
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
                  value={`${name} ${index + 1}`}
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
