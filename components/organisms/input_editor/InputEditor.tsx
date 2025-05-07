import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { Select } from "antd";
import { Rule } from "antd/es/form";
import { ComponentProps, Dispatch, SetStateAction } from "react";

enum InputSize {
  half = "half",
  full = "full",
  _35 = "_35",
}

enum H {
  _25 = "_25",
  _50 = "_50",
  _60 = "_60",
  _150 = "_150",
}

const inputEnums = [
  { name: "input_size", values: InputSize },
  { name: "h", values: H },
];

type Field = {
  name: string;
  label?: string;
  rules?: Rule[];
  type?: string;
  element: "input" | "select" | "checkbox" | "radio" | "textarea";
  placeholder?: string;
  generalInputProps?: ComponentProps<typeof InputField>;
  generalButtonProps?: ComponentProps<typeof BtnField>;
  inputProps?: ComponentProps<typeof InputField>;
  btnProps?: ComponentProps<typeof BtnField>;
  inputWidth?: "w-min" | "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-max";
};
const InputEditor = ({
  row,
  setRow,
  rows,
  element,
  setElement,
  elements,
  fields,
  setFields,
}: {
  row: number;
  setRow: Dispatch<SetStateAction<number>>;
  rows: { value: number }[];
  element: number;
  setElement: Dispatch<SetStateAction<number>>;
  elements: { value: number }[];
  fields: Field[][];
  setFields: Dispatch<SetStateAction<Field[][]>>;
}) => (
  <>
    <label className="text-[20px] font-bold leading-[24px]">Row</label>
    <Select
      value={row}
      className="w-full"
      defaultActiveFirstOption
      options={rows}
      onChange={(value) => {
        setRow(value);
      }}
    />
    <label className="text-[20px] font-bold leading-[24px]">Element</label>
    <Select
      value={element}
      className="w-full"
      defaultActiveFirstOption
      options={elements}
      onChange={(value) => {
        setElement(value);
      }}
    />
    <label className="text-[20px] font-bold leading-[24px]">Input width</label>
    <Select
      value={fields[row][element].inputWidth}
      className="w-full"
      defaultActiveFirstOption
      options={[
        { value: "w-min", label: "Min" },
        { value: "w-full", label: "Full" },
        { value: "w-1/2", label: "1/2" },
        { value: "w-1/3", label: "1/3" },
        { value: "w-1/4", label: "1/4" },
        { value: "w-max", label: "Max" },
      ]}
      onChange={(value) => {
        const newFields = [...fields];
        newFields[row][element].inputWidth = value;
        setFields(newFields);
      }}
    />
    {inputEnums.map((inputEnum) => {
      return (
        <div key={inputEnum.name} className="flex flex-col gap-[20px]">
          <label className="text-[20px] font-bold leading-[24px]">
            Input: {inputEnum.name}
          </label>
          <Select
            className="w-full"
            value={Object.keys(inputEnum.values).find(
              (key) =>
                fields[row][element].inputProps?.[
                  inputEnum.name as keyof Field["inputProps"]
                ] === inputEnum.values[key as keyof typeof inputEnum.values]
            )}
            options={Object.keys(inputEnum.values).map((key) => ({
              value: key,
              label: key,
            }))}
            onChange={(value) => {
              const newFields = [...fields];
              newFields[row][element].inputProps = {
                ...newFields[row][element].inputProps,
                [inputEnum.name]:
                  inputEnum.values[value as keyof typeof inputEnum.values],
              };
              setFields(newFields);
            }}
          />
        </div>
      );
    })}
  </>
);

export default InputEditor;
