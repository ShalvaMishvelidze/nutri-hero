import { Input, InputProps } from "antd";
import { input_style } from "./InputField.style";
import { InputSize } from "./InputField.config";

const InputField = ({
  type,
  input_size = "full",
  placeholder,
  onChange,
  className,
  ...rest
}: {
  input_size?: keyof typeof InputSize;
  type?: string;
  placeholder?: string;
} & InputProps) => {
  return (
    <Input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} ${InputSize[input_size]} ${input_size} ${input_style}`}
      {...rest}
    />
  );
};
export default InputField;
