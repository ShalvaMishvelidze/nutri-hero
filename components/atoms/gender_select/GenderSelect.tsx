import { Select, SelectProps } from "antd";
import Image from "next/image";

const GenderSelect = ({
  placeholder,
  male,
  female,
  img_url = "/checked.svg",
  white = false,
  ...rest
}: {
  placeholder: string;
  male: string;
  female: string;
  img_url?: string;
  white?: boolean;
} & SelectProps) => {
  return (
    <Select
      className={`!h-[60px] ${
        white ? "[body_&_.ant-select-selector]:!bg-white" : "bg-blue-5"
      }`}
      placeholder={placeholder}
      suffixIcon={
        <Image
          className="size-[18px]"
          src={img_url}
          alt="checked"
          width={18}
          height={18}
        />
      }
      {...rest}
    >
      <Select.Option value="Male">{male}</Select.Option>
      <Select.Option value="Female">{female}</Select.Option>
    </Select>
  );
};
export default GenderSelect;
