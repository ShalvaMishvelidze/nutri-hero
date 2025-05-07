"use client";
import { InputField } from "@/components/atoms/input_field";
import { Form } from "antd";
import { Rule } from "antd/lib/form";
import { ComponentProps, ReactNode } from "react";
import { BtnField } from "@/components/atoms/btn_field";

type Field = {
  name: string;
  label?: string;
  rules?: Rule[];
  type?: string;
  element: "input" | "select" | "checkbox" | "radio" | "textarea" | "button";
  placeholder?: string;
  inputProps?: ComponentProps<typeof InputField>;
  inputWidth?: string;
};

const CustomForm = ({
  fields,
  buttons,
  generalInputProps,
  generalButtonProps, //
  top, // Remove default value from destructuring
  bottom,
}: {
  fields: Field[][];
  buttons: {
    btnProps?: ComponentProps<typeof BtnField>;
    children: ReactNode;
  }[];
  generalButtonProps?: ComponentProps<typeof BtnField>;
  generalInputProps?: ComponentProps<typeof InputField>;
  top?: ReactNode; // Make top optional
  bottom?: ReactNode;
}) => {
  // Assign default value for top inside the component
  const topContent = top || (
    <h1 className="text-[28px] font-bold leading-[32px] mb-[20px]">
      Story Form
    </h1>
  );

  return (
    <Form
      className="!max-w-[500px] !w-full !px-[30px] !py-[20px] !bg-white-5 !shadow-md !rounded-[10px] !mx-auto"
      layout="vertical"
    >
      {topContent} {/* Use the variable with the default value */}
      {fields.map((fieldGroup, index) => {
        return (
          <div className="flex gap-[10px]" key={`form_row_${index}`}>
            {fieldGroup.map((field, index) => {
              return (
                <Form.Item
                  key={`form_item_${index}`}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                  className={`${
                    field.inputWidth ? `!${field.inputWidth}` : "w-auto"
                  }`}
                >
                  <InputField
                    {...{ ...generalInputProps, ...field.inputProps }}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                </Form.Item>
              );
            })}
          </div>
        );
      })}
      <div className="flex gap-[10px]">
        {buttons.map((button, index) => {
          return (
            <BtnField
              key={`${Math.random()}form_button_${index}`}
              {...{ ...generalButtonProps, ...button.btnProps }}
            >
              {button.children}
            </BtnField>
          );
        })}
      </div>
      {bottom}
    </Form>
  );
};
export default CustomForm;
