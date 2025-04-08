"use client";
import Image from "next/image";
import { Checkbox, CheckboxRef, Form } from "antd";
import { Dispatch, SetStateAction, useRef } from "react";
import { terms_checkbox } from "./CustomCheckbox.styles";

const CustomCheckbox = ({
  paragraph,
  oldVal,
  setOldVal,
  name,
  value,
  form,
}: {
  paragraph: string;
  oldVal: string;
  setOldVal: Dispatch<SetStateAction<string>>;
  name: string;
  value: string;
  form: ReturnType<typeof Form.useForm>[0];
}) => {
  const checkboxRef = useRef<CheckboxRef>(null);

  return (
    <div>
      <div
        onClick={() => {
          console.log("clicked");
          console.log(form.getFieldsValue());

          checkboxRef.current?.input?.click();
          setOldVal(form.getFieldValue(name));
        }}
        className="flex items-center cursor-pointer"
      >
        <div
          className={`${terms_checkbox} ${oldVal === value && "border-blue"}`}
        >
          {oldVal === value && (
            <Image src={"/checked.svg"} alt="checked" width={15} height={15} />
          )}
        </div>
      </div>
      <Checkbox
        className="!hidden"
        ref={checkboxRef}
        value={value}
        checked={oldVal === value}
      >
        {paragraph}
      </Checkbox>
    </div>
  );
};

export default CustomCheckbox;
