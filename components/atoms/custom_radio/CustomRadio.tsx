"use client";
import Image from "next/image";
import { terms_checkbox } from "./CustomRadio.styles";
import { Form, Radio } from "antd";
import { Dispatch, SetStateAction, useRef } from "react";
import { RadioRef } from "antd/es/radio";

const CustomRadio = ({
  oldVal,
  setOldVal,
  name,
  value,
  form,
}: {
  oldVal: string;
  setOldVal: Dispatch<SetStateAction<string>>;
  name: string;
  value: string;
  form: ReturnType<typeof Form.useForm>[0];
}) => {
  const radioRef = useRef<RadioRef>(null);

  return (
    <div>
      <div
        onClick={() => {
          radioRef.current?.input?.click();
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
      <Radio className="!hidden" ref={radioRef} value={value} />
    </div>
  );
};

export default CustomRadio;
