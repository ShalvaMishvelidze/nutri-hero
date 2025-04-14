import { Input, InputProps } from "antd";
import { input_style } from "./InputField.style";
import { H, InputSize } from "./InputField.config";

const InputField = ({
  type,
  input_size = "full",
  h = "_60",
  placeholder,
  value,
  white,
  onChange,
  className,
  ...rest
}: {
  input_size?: keyof typeof InputSize;
  h?: keyof typeof H;
  type?: string;
  value?: string;
  placeholder?: string;
  white?: boolean;
} & InputProps) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} ${InputSize[input_size]} ${
        H[h]
      } ${input_style} ${white && "!bg-white"}`}
      {...rest}
    />
  );
};
export default InputField;
