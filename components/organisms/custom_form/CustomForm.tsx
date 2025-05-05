import { InputField } from "@/components/atoms/input_field";
import { Form } from "antd";
import { Rule } from "antd/lib/form";
import { ComponentProps, ReactNode } from "react";
import { InputWidth } from "./CustomForm.config";
import { BtnField } from "@/components/atoms/btn_field";

type Field = {
  name: string;
  label?: string;
  rules?: Rule[];
  type?: string;
  placeholder?: string;
  inputProps?: ComponentProps<typeof InputField>;
  inputWidth?: keyof typeof InputWidth;
};

const CustomForm = ({
  fields,
  buttons,
  generalButtonProps,
  generalInputFieldProps,
  top,
  bottom,
}: {
  fields: Field[][];
  buttons: { children: ReactNode; onClick: () => void }[];
  generalButtonProps?: ComponentProps<typeof BtnField>;
  generalInputFieldProps?: ComponentProps<typeof InputField>;
  top: ReactNode;
  bottom: ReactNode;
}) => {
  return (
    <Form
      className="max-w-[500px] w-full px-[30px] py-[20px] bg-white-5 shadow-md rounded-[10px] mx-auto"
      layout="vertical"
    >
      {top}
      {fields.map((fieldGroup, index) => {
        return (
          <div
            className="flex gap-[10px]"
            key={`${Math.random()}form_row_${index}`}
          >
            {fieldGroup.map((field, index) => {
              return (
                <Form.Item
                  className={`${
                    field.inputWidth ? InputWidth[field.inputWidth] : ""
                  }`}
                  key={`${Math.random()}form_item_${index}`}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                >
                  <InputField
                    {...(field.inputProps
                      ? field.inputProps
                      : generalInputFieldProps)}
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
              {...generalButtonProps}
              onClick={button.onClick}
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
