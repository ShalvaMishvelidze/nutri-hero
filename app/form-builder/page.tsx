"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { BtnEditor } from "@/components/organisms/btn_editor";
import { CustomForm } from "@/components/organisms/custom_form";
import { GeneralPropsEditor } from "@/components/organisms/general_props_editor";
import { InputEditor } from "@/components/organisms/input_editor";
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
        <GeneralPropsEditor
          generalInputProps={generalInputProps}
          setGeneralInputProps={setGeneralInputProps}
          generalButtonProps={generalButtonProps}
          setGeneralButtonProps={setGeneralButtonProps}
        />
      )}

      {elType === "input" && (
        <InputEditor
          element={element}
          elements={elements}
          fields={fields}
          row={row}
          rows={rows}
          setElement={setElement}
          setFields={setFields}
          setRow={setRow}
        />
      )}
      {elType === "button" && (
        <BtnEditor
          btn={btn}
          btns={btns}
          buttons={buttons}
          setBtn={setBtn}
          setButtons={setButtons}
        />
      )}
    </div>
  );
};
