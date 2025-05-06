"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { CustomForm } from "@/components/organisms/custom_form";
import { Select } from "antd";
import { Rule } from "antd/es/form";
import {
  ComponentProps,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

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

const FormBuilder = () => {
  const [fields, setFields] = useState<Field[][]>([
    [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        element: "input",
        rules: [{ required: true, message: "Required" }],
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        element: "input",
      },
    ],
    [
      {
        name: "email",
        label: "Email",
        type: "email",
        rules: [{ required: true, message: "Required" }],
      },
    ],
    [
      {
        name: "password",
        label: "Password",
        type: "password",
      },
      {
        name: "age",
        label: "Age",
        inputProps: {
          input_size: "_35",
        },
        inputWidth: "w-min",
      },
    ],
  ] as Field[][]);
  const [buttons, setButtons] = useState<
    { btnProps?: ComponentProps<typeof BtnField>; children: ReactNode }[]
  >([
    {
      children: "Submit",
    },
    {
      children: "Cancel",
    },
  ]);
  const [generalInputProps, setGeneralInputProps] = useState<
    ComponentProps<typeof InputField>
  >({
    input_size: "full",
    h: "_60",
  });
  const [generalButtonProps, setGeneralButtonProps] = useState<
    ComponentProps<typeof BtnField>
  >({
    children: "Button",
  });

  return (
    <section className="bg-gray-30 min-h-screen w-full py-[100px]">
      <FormBuildSelect
        fields={fields}
        setFields={setFields}
        buttons={buttons}
        setButtons={setButtons}
        generalInputProps={generalInputProps}
        setGeneralInputProps={setGeneralInputProps}
        generalButtonProps={generalButtonProps}
        setGeneralButtonProps={setGeneralButtonProps}
      />
      <CustomForm
        generalInputProps={generalInputProps}
        buttons={buttons}
        fields={fields}
        generalButtonProps={generalButtonProps}
      />
    </section>
  );
};
export default FormBuilder;

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

export enum Btn_Size {
  auto = "auto",
  smallest = "smallest",
  tiny = "tiny",
  small = "small",
  medium = "medium",
  big = "big",
  full = "full",
  _59 = "_59",
  _88 = "_88",
  _139 = "_139",
}

export enum Btn_Height {
  small = "small",
  regular = "regular",
  medium = "medium",
  _25 = "_25",
}

export enum Btn_Mt {
  none = "none",
  regular = "regular",
  medium = "medium",
  big = "big",
  huge = "huge",
  _10 = "_10",
}

export enum Btn_Ml {
  none = "none",
  regular = "regular",
  medium = "medium",
  big = "big",
  huge = "huge",
}

export enum Btn_Pb {
  none = "none",
  tiny = "tiny",
  small = "small",
  regular = "regular",
  medium = "medium",
}

export enum Btn_Bg {
  filled = "filled",
  empty = "empty",
  light = "light",
  gray_light = "gray_light",
  gray = "gray",
  green = "green",
  purple_light = "purple_light",
  purple_dark = "purple_dark",
  blue = "blue",
}

export enum Btn_Text {
  tiny = "tiny",
  small = "small",
  normal = "normal",
}

export enum Btn_Radius {
  small = "small",
  regular = "regular",
  _3 = "_3",
  _18 = "_18",
}

export enum Btn_TextColor {
  white = "white",
  black = "black",
  purple = "purple",
  blue = "blue",
  gray = "gray",
  green = "green",
  gray_light = "gray_light",
  gray_dark = "gray_dark",
}

const buttonEnums = [
  { name: "btn_size", values: Btn_Size },
  { name: "h", values: Btn_Height },
  { name: "m_top", values: Btn_Mt },
  { name: "m_left", values: Btn_Ml },
  { name: "p_bottom", values: Btn_Pb },
  { name: "bg", values: Btn_Bg },
  { name: "text", values: Btn_Text },
  { name: "radius", values: Btn_Radius },
  { name: "textColor", values: Btn_TextColor },
];

const FormBuildSelect = ({
  fields,
  setFields,
  buttons,
  setButtons,
  generalInputProps,
  setGeneralInputProps,
  generalButtonProps,
  setGeneralButtonProps,
}: {
  fields: Field[][];
  setFields: Dispatch<SetStateAction<Field[][]>>;
  buttons: {
    btnProps?: ComponentProps<typeof BtnField>;
    children: ReactNode;
  }[];
  setButtons: Dispatch<
    SetStateAction<
      { btnProps?: ComponentProps<typeof BtnField>; children: ReactNode }[]
    >
  >;
  generalInputProps: ComponentProps<typeof InputField>;
  setGeneralInputProps: Dispatch<
    SetStateAction<ComponentProps<typeof InputField>>
  >;
  generalButtonProps: ComponentProps<typeof BtnField>;
  setGeneralButtonProps: Dispatch<
    SetStateAction<ComponentProps<typeof BtnField>>
  >;
}) => {
  const [elType, setElType] = useState<"input" | "button" | "general">(
    "general"
  );
  const [rows, setRows] = useState(
    Array.from({ length: fields.length }, (_, i) => {
      return {
        value: i,
      };
    })
  );
  const [row, setRow] = useState(0);
  const [elements, setElements] = useState(
    Array.from({ length: fields[0].length }, (_, i) => {
      return {
        value: i,
      };
    })
  );
  const [element, setElement] = useState(0);
  const [btn, setBtn] = useState(0);
  const [btns, setBtns] = useState(
    Array.from({ length: buttons.length }, (_, i) => {
      return {
        value: i,
      };
    })
  );

  useEffect(() => {
    setRows(
      Array.from({ length: fields.length }, (_, i) => {
        return {
          value: i,
          label: `Row ${i + 1}`,
        };
      })
    );
    console.log(fields);
  }, [fields]);

  useEffect(() => {
    setElements(
      Array.from({ length: fields[row].length }, (_, i) => {
        return {
          value: i,
          label: `Element ${i + 1}`,
        };
      })
    );
  }, [row, fields]);

  useEffect(() => {
    setBtns(
      Array.from({ length: buttons.length }, (_, i) => {
        return {
          value: i,
          label: `Button ${i + 1}`,
        };
      })
    );
  }, [buttons]);

  return (
    <div className="w-full max-w-[500px] mx-auto bg-white-5 mb-[20px] rounded-[10px] p-[30px] flex flex-col gap-[20px] shadow-md">
      <label className="text-[20px] font-bold leading-[24px]">
        Element type
      </label>
      <Select
        value={elType}
        className="w-full"
        defaultActiveFirstOption
        options={[
          { value: "input", label: "Input" },
          { value: "button", label: "Button" },
          { value: "general", label: "General" },
        ]}
        onChange={(value) => {
          setElType(value);
        }}
      />
      {elType === "general" && (
        <div className="grid grid-cols-2 gap-[20px]">
          {inputEnums.map((inputEnum) => (
            <div key={inputEnum.name} className="flex flex-col gap-[20px] ">
              <label className="text-[20px] font-bold leading-[24px]">
                Input: {inputEnum.name}
              </label>
              <Select
                className="w-full"
                placeholder={`Select ${inputEnum.name}`}
                options={Object.keys(inputEnum.values).map((key) => ({
                  value: key,
                  label: key,
                }))}
                value={Object.keys(inputEnum.values).find(
                  (key) =>
                    generalInputProps?.[
                      inputEnum.name as keyof typeof generalInputProps
                    ] === inputEnum.values[key as keyof typeof inputEnum.values]
                )}
                onChange={(value) => {
                  const newGeneralInputProps = {
                    ...generalInputProps,
                    [inputEnum.name]:
                      inputEnum.values[value as keyof typeof inputEnum.values],
                  };
                  setGeneralInputProps(newGeneralInputProps);
                }}
              />
            </div>
          ))}
          {buttonEnums.map((btnEnum) => (
            <div key={btnEnum.name} className="flex flex-col gap-[20px]">
              <label className="text-[20px] font-bold leading-[24px]">
                Button: {btnEnum.name}
              </label>
              <Select
                className="w-full"
                placeholder={`Select ${btnEnum.name}`}
                value={Object.keys(btnEnum.values).find(
                  (key) =>
                    generalButtonProps?.[
                      btnEnum.name as keyof typeof generalButtonProps
                    ] === btnEnum.values[key as keyof typeof btnEnum.values]
                )}
                options={Object.keys(btnEnum.values).map((key) => ({
                  value: key,
                  label: key,
                }))}
                onChange={(value) => {
                  const newGeneralButtonProps = {
                    ...generalButtonProps,
                    [btnEnum.name]:
                      btnEnum.values[value as keyof typeof btnEnum.values],
                  };
                  setGeneralButtonProps(newGeneralButtonProps);
                }}
              />
            </div>
          ))}
        </div>
      )}

      {elType === "input" && (
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
          <label className="text-[20px] font-bold leading-[24px]">
            Element
          </label>
          <Select
            value={element}
            className="w-full"
            defaultActiveFirstOption
            options={elements}
            onChange={(value) => {
              setElement(value);
            }}
          />
          <label className="text-[20px] font-bold leading-[24px]">
            Input width
          </label>
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
                      ] ===
                      inputEnum.values[key as keyof typeof inputEnum.values]
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
                        inputEnum.values[
                          value as keyof typeof inputEnum.values
                        ],
                    };
                    setFields(newFields);
                  }}
                />
              </div>
            );
          })}
        </>
      )}
      {elType === "button" && (
        <>
          <label className="text-[20px] font-bold leading-[24px]">Button</label>
          <Select
            value={btn}
            className="w-full"
            defaultActiveFirstOption
            options={btns}
            onChange={(value) => {
              setBtn(value);
            }}
          />
          {buttonEnums.map((btnEnum) => (
            <div key={btnEnum.name} className="flex flex-col gap-[20px]">
              <label className="text-[20px] font-bold leading-[24px]">
                Button: {btnEnum.name}
              </label>
              <Select
                className="w-full"
                placeholder={`Select ${btnEnum.name}`}
                value={Object.keys(btnEnum.values).find(
                  (key) =>
                    buttons[btn]?.btnProps?.[
                      btnEnum.name as keyof typeof BtnField
                    ] === btnEnum.values[key as keyof typeof btnEnum.values]
                )}
                options={Object.keys(btnEnum.values).map((key) => ({
                  value: key,
                  label: key,
                }))}
                onChange={(value) => {
                  const newButtons = [...buttons];
                  newButtons[btn].btnProps = {
                    ...newButtons[btn].btnProps,
                    children: newButtons[btn].children,
                    ...newButtons[btn].btnProps,
                    [btnEnum.name]:
                      btnEnum.values[value as keyof typeof btnEnum.values],
                  };
                  setButtons(newButtons);
                }}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
