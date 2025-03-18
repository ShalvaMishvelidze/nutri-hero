import { ChangeEvent, ReactNode } from "react";
import {
  input_container,
  input_right,
  input_style,
} from "./InputPrimary.style";

const InputPrimary = ({
  name,
  value,
  type,
  placeholder,
  handleChange,
  children,
}: {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}) => {
  return (
    <div className={input_container}>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={input_style}
      />
      {children && <div className={input_right}>{children}</div>}
    </div>
  );
};

export default InputPrimary;
