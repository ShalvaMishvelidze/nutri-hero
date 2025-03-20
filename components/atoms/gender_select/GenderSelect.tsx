import { Select } from "antd";
import Image from "next/image";

const GenderSelect = ({
  placeholder,
  male,
  female,
}: {
  placeholder: string;
  male: string;
  female: string;
}) => {
  return (
    <Select
      className="!h-[60px] bg-blue-5"
      placeholder={placeholder}
      suffixIcon={
        <Image
          className="size-[18px]"
          src={"/checked.svg"}
          alt="checked"
          width={18}
          height={18}
        />
      }
    >
      <Select.Option value="Male">{male}</Select.Option>
      <Select.Option value="Female">{female}</Select.Option>
    </Select>
  );
};
export default GenderSelect;
