import { Input, InputProps } from "antd";
import { input_style } from "./InputField.style";
import { H, InputSize } from "./InputField.config";

const InputField = ({
  type,
  input_size = "full",
  h = "_60",
  placeholder,
  onChange,
  className,
  ...rest
}: {
  input_size?: keyof typeof InputSize;
  h?: keyof typeof H;
  type?: string;
  placeholder?: string;
} & InputProps) => {
  return (
    <Input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} ${InputSize[input_size]} ${H[h]} ${input_style}`}
      {...rest}
    />
  );
};
export default InputField;
